const EtoH=async(x)=>{
    const f=await fetch(`https://google-translate1.p.rapidapi.com/language/translate/v2`,{
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '43968ab699msh2d98a824145c580p1ccd2ejsn9c58a9fb8c7c',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: x,
            target: 'hi',
            source: 'en'
        })
    });
    const j=await f.json();
    console.log(j);
    hinditext.innerHTML=j.data.translations[0].translatedText;
}
const HtoE=async(x)=>{
    const f=await fetch(`https://google-translate1.p.rapidapi.com/language/translate/v2`,{
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '43968ab699msh2d98a824145c580p1ccd2ejsn9c58a9fb8c7c',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: x,
            target: 'en',
            source: 'hi'
        })
    });
    const j=await f.json();
    console.log(j);
    hinditext.innerHTML=j.data.translations[0].translatedText;
}
