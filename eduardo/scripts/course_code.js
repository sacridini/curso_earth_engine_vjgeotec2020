var geet = require('users/elacerda/geet:geet'); 
var col_imagem = ee.ImageCollection(ls8.filterBounds(roi).filterDate('2019-01-01', '2019-12-31'))
var melhor_imagem = col_imagem.sort('CLOUD_COVER')
var rio = melhor_imagem.first();
var rio_idx = geet.landsat_indices(rio, 'L8');
rio = rio.addBands(rio_idx)
print(rio_idx)

Map.addLayer(melhor_imagem.first(), imageVisParam, 'imagem')

var amostras = floresta.merge(agua).merge(urbano)

var input_features = rio.sampleRegions({
  collection: amostras,
  properties: ['classe'],
  scale: 30
})

input_features = input_features.randomColumn()
var split = 0.7
var trainingPartition = input_features.filter(ee.Filter.lt('random', split))
var testingPartition = input_features.filter(ee.Filter.gte('random', split))


var classifier = ee.Classifier.smileRandomForest(300).train({
  features: input_features,
  classProperty: 'classe',
  inputProperties: ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'NDVI', 'NDWI', 'NDMI', 'EVI']
});

// Model/Classify with training dataset 
var classified = rio.classify(classifier);

// Validation
var validation = testingPartition.classify(classifier);
var testAccuracy = validation.errorMatrix('classe', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());
print('kappa: ', testAccuracy.kappa())

Map.addLayer(classified)

Export.image.toDrive({
  image: classified,
  folder: 'ee',
  scale: 30,
  region: niteroi,
  maxPixels: 1e13
})