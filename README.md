# Bahu-Shabadi

Assaa Dee Vaar / Assaa Kee Vaar is a vaar sung in the morning. It is [sung at Sri Darbar Sahib, Harminder Sahib Amritsar every morning](https://youtu.be/EEjBJv9XVqQ), among all gurdwaras and by many gursikhs all over the world. It includes the Shants by Sri Guru Raamdaas Jee Maharaj as well as shabads by Sri Guru Nanak Dev Jee Maharaj and Sri Guru Angad Dev Jee Maharaj.


### Goal of this project

This project aims to have easy access to the bani along with shabads which can be sung with the bani.


### Adding shabads to the available list

Shabads can be added by editing the shabads.json file. For each shakka there is a shabads entry. Shabads can be added to the array by getting the shabad ID and line ID from GurbaniNow.com. When searching a shabad on GurbaniNow.com, look at the resulting URL.

For example, for the shabad ਹੇ ਗੋਬਿੰਦ ਹੇ ਗੋਪਾਲ ਹੇ ਦਇਆਲ ਲਾਲ ॥੧॥ ਰਹਾਉ ॥ has the url [https://gurbaninow.com/shabad/DX1/2U8U](https://gurbaninow.com/shabad/DX1/2U8U).
The first set of alphanumerals are for the shabad and the second set of alphanumerals are for the line which you want to show.

{"id":"DX1","line":"2U8U"}


## Acknowledgments

* [Gurbani Now API](https://github.com/GurbaniNow/api)
* [Lettering.JS](http://letteringjs.com/)
* [ਅਮ੍ਰਿਤ ਕੀਰਤਨ - ਖਾਲਸਾ ਬ੍ਰਦਰਜ਼ - ੪੦ਵੀਂ ਐਡੀਸ਼ਨ - ਜੁਲਾਈ ੨੦੧੧](http://www.vidhia.com/Bani/Amrit%20Keertan%20%28Khalsa%20Brothers%29.pdf)
* ਅਮ੍ਰਿਤ ਕੀਰਤਨ - ਖਾਲਸਾ ਬ੍ਰਦਰਜ਼ - ੨੬ਵੀਂ ਐਡੀਸ਼ਨ - ਜਨਵਰੀ ੧੯੯੮
* Gutka Sahib : ਕੀਰਤਨੀ ਆਸਾ ਦੀ ਵਾਰ (ਮੋਟੇ ਆਖਰ) - ਭਾ: ਚਤਰ ਸਿੰਘ ਜੀਵਨ ਸਿੰਘ - ਸੋਧਕ: ਗਿਆਨੀ ਮੋਹਨ ਸਿੰਘ 
