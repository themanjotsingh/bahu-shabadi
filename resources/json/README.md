## editing the Shabads.json file
The [`shabads.json`]([https://github.com/themanjotsingh/bahu-shabadi/blob/master/json/shabads.json](https://github.com/themanjotsingh/bahu-shabadi/blob/master/json/shabads.json)) file is where all the shabad ids are stored.

Shabads can be added by getting the shabad ID and line ID from GurbaniNow.com. When searching a shabad on GurbaniNow.com, look at the resulting URL.

For example, for the shabad ਹੇ ਗੋਬਿੰਦ ਹੇ ਗੋਪਾਲ ਹੇ ਦਇਆਲ ਲਾਲ ॥੧॥ ਰਹਾਉ ॥ has the url [https://gurbaninow.com/shabad/DX1/2U8U](https://gurbaninow.com/shabad/DX1/2U8U).
The first set of alphanumerals are for the shabad and the second set of alphanumerals are for the line which you want to show.

`{"id":"DX1","line":"2U8U"}`


#### Assa Dee Vaar 
shaka - which shaka
shakalines - the lines of the shant for this shaka
shakashabads - the saloks and pauree for this shaka

#### Adding shabads from other sources
amritkirtann - shabad(s) from  [ਅਮ੍ਰਿਤ ਕੀਰਤਨ - ਖਾਲਸਾ ਬ੍ਰਦਰਜ਼ - 40th Edition - ਜੁਲਾਈ ੨੦੧੧](http://www.vidhia.com/Bani/Amrit%20Keertan%20%28Khalsa%20Brothers%29.pdf)
advgutka - shabad(s) from Gutka Sahib : ਕੀਰਤਨੀ ਆਸਾ ਦੀ ਵਾਰ (ਮੋਟੇ ਆਖਰ) - ਭਾ: ਚਤਰ ਸਿੰਘ ਜੀਵਨ ਸਿੰਘ - ਸੋਧਕ: ਗਿਆਨੀ ਮੋਹਨ ਸਿੰਘ 

#### Adding shabads
shabads - other shabads not added for each shaka from a specific source



    
	    {
    
		    "shaka": "one",
    
		    "shakalines": "RWU7,2PQF,5006,2H1C,Z0WT,Z41R", 
    
		    "shakashabads": "GK0,1TN,DU3,595", 
    
		    "advgutka": [{"id": "DX1","line": "2U8U"}],
    
		    "shabads": [
			    {"id": "CXV","line": "F2MT"}, **ADD SHABADS HERE** ],
    
		    "amritkirtann": [
    
			    {"id": "99U","line": "UVLP"},
                {"id": "ZRU","line": "S1J5"},
			    {"id": "FR0","line": "AA04"},
			    {"id": "GG3","line": "KQRP"},
			    {"id": "K9P","line": "3YE6"},
			    {"id": "STU","line": "Z7SS"},
			    {"id": "BKW","line": "8FV4"},
			    {"id": "HFP","line": "JNH5"}
			]
    },
    ...

