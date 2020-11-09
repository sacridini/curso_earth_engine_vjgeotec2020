var ls8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR"),
    roi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-43.24386933695422, -22.91887787867491]),
    imageVisParam = {"opacity":1,"bands":["B4","B3","B2"],"min":-5,"max":2275,"gamma":1},
    floresta = 
    /* color: #2ec544 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.29365283749257, -22.9402512585667]),
            {
              "classe": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.283353154875385, -22.951632899261238]),
            {
              "classe": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25245410702382, -22.967755251316653]),
            {
              "classe": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.265157048918354, -22.96585860377676]),
            {
              "classe": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44677478573476, -22.936773344119615]),
            {
              "classe": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.43613178036367, -22.94783912538659]),
            {
              "classe": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.4763005425707, -22.948155277272072]),
            {
              "classe": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.487943429419325, -22.793305048520185]),
            {
              "classe": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.507169503638075, -22.80786382945303]),
            {
              "classe": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.498929757544325, -22.81482617486382]),
            {
              "classe": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.47936036057167, -22.801534115783873]),
            {
              "classe": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.46425415939979, -22.80058463337599]),
            {
              "classe": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.511632699438856, -22.820205925300954]),
            {
              "classe": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02876020652014, -22.912038319916036]),
            {
              "classe": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02446867209631, -22.90745282277548]),
            {
              "classe": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08214689475256, -22.921999382637637]),
            {
              "classe": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.001522565814774, -22.94525275332999]),
            {
              "classe": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.472387791065756, -22.93429634898765]),
            {
              "classe": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.506891727833334, -22.960379006352582]),
            {
              "classe": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.46158949829093, -22.965686957923328]),
            {
              "classe": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44699828124991, -22.969322180282223]),
            {
              "classe": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26155987528307, -22.975802116818375]),
            {
              "classe": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.29177227762682, -22.956203309122202]),
            {
              "classe": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.51995445375784, -22.982013366624503]),
            {
              "classe": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.53128410463675, -23.020726679681232]),
            {
              "classe": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.537292252830106, -23.02641423055842]),
            {
              "classe": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.478464591418735, -22.602626650145996]),
            {
              "classe": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.44619225255155, -22.573780903525986]),
            {
              "classe": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.37340782872342, -22.54905117139355]),
            {
              "classe": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.320192801867954, -22.53129375804416]),
            {
              "classe": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.463701713000766, -22.570293645826066]),
            {
              "classe": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.49734734288358, -22.596287443661556]),
            {
              "classe": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-43.4269661783328, -22.54112403696208],
                  [-43.43211601964139, -22.554758426229295],
                  [-43.414263236438266, -22.556660792041708]]]),
            {
              "classe": 0,
              "system:index": "32"
            })]),
    agua = 
    /* color: #108cee */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.15305980372708, -22.737713397777608]),
            {
              "classe": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10018809962552, -22.716813492238156]),
            {
              "classe": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07546886134427, -22.716496802447317]),
            {
              "classe": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19151195216458, -22.75924329261989]),
            {
              "classe": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.23545726466458, -22.779820166945964]),
            {
              "classe": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.2000849858419, -22.83848471202448]),
            {
              "classe": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.157169641603616, -22.84987489292877]),
            {
              "classe": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1443533787655, -22.987651739283976]),
            {
              "classe": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.228124130718626, -23.012618104700056]),
            {
              "classe": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.33833073472253, -23.036947964395633]),
            {
              "classe": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40630863999597, -23.038843613194857]),
            {
              "classe": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.42622135972253, -23.059693989254725]),
            {
              "classe": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.382962692730345, -23.058114528347513]),
            {
              "classe": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.40527867173425, -22.987651739283976]),
            {
              "classe": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.39806889390222, -22.98607143421408]),
            {
              "classe": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.856372671065905, -22.947379914169954]),
            {
              "classe": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.84332640641747, -22.942005200877485]),
            {
              "classe": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.86426909440575, -22.95148984501387]),
            {
              "classe": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.796977834640124, -22.945799138299297]),
            {
              "classe": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.87731535905419, -23.015967782631662]),
            {
              "classe": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.010181264815905, -22.99732291542248]),
            {
              "classe": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07266600602684, -23.020707592294357]),
            {
              "classe": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09704192155419, -22.982152309870937]),
            {
              "classe": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06991942399559, -22.97330200310547]),
            {
              "classe": 1,
              "system:index": "23"
            })]),
    urbano = 
    /* color: #ff0101 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.30223977689021, -22.885127665085175]),
            {
              "classe": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.31906259183162, -22.880699412778483]),
            {
              "classe": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.28301370267146, -22.877061811757308]),
            {
              "classe": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.26104104642146, -22.87548021570016]),
            {
              "classe": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.23958337430232, -22.85681599139704]),
            {
              "classe": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.244733215610914, -22.855392343639902]),
            {
              "classe": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.24250161771052, -22.85792326267716]),
            {
              "classe": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.360362120562264, -22.85819318300979]),
            {
              "classe": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.34405428975172, -22.839526584563725]),
            {
              "classe": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.41357714741773, -22.80234394987265]),
            {
              "classe": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.430228300982186, -22.811205414015003]),
            {
              "classe": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.36894518940992, -22.777655404777448]),
            {
              "classe": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.34748751729078, -22.79506445897043]),
            {
              "classe": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.39263445942945, -22.7895254554953]),
            {
              "classe": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.484580810753194, -22.749683226669063]),
            {
              "classe": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.42278271505007, -22.75379913771917]),
            {
              "classe": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.41196804830202, -22.75189950187307]),
            {
              "classe": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.25774586671626, -22.680734695186498]),
            {
              "classe": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19044295333092, -22.803634751384163]),
            {
              "classe": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.18409148238366, -22.802527038338877]),
            {
              "classe": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.183404836875845, -22.817084834076994]),
            {
              "classe": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.19868269942467, -22.795247557214594]),
            {
              "classe": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.17585173628991, -22.790499860101562]),
            {
              "classe": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08296690993752, -22.826052735676157]),
            {
              "classe": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.039364920191424, -22.810230012988125]),
            {
              "classe": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02580367141213, -22.78348543444831]),
            {
              "classe": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.993188009791034, -22.802792698349727]),
            {
              "classe": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98975478225197, -22.798203514481617]),
            {
              "classe": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.24686327145608, -22.81705169823185]),
            {
              "classe": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.250725652437524, -22.8142035555662]),
            {
              "classe": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.245232488375024, -22.815390288915083]),
            {
              "classe": 2,
              "system:index": "30"
            })]),
    niteroi = ee.FeatureCollection("users/elacerda/mun_niteroi");