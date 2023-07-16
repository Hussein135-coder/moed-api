const express = require('express')
const cors = require('cors');

const app = express()

app.use(
	cors()
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(
	`Server started on port ${PORT}`));

    app.get('/',(req,res)=>{
    res.send("Ok")
})

    app.get('/moedapi',async (req,res)=>{
        const num = req.query.num
	const gove = req.query.gove
        const data = await fetchResultApi(num,gove)
        res.json({data : data})
})

const fetchResultApi = async (num=15646,gove=2)=>{
    try {
    const options = {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
            "ylissue" : "myyl_AGyl4",
            "host" : "moed.gov.sy",
            "User-Agent" : "Dart/2.13 (dart:io)"
        }
    }

        const response = await fetch(`http://moed.gov.sy/api_2021/sec_2022/12th.php?dt=1&br=91&id=${num}&gove=${gove}`,options)
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error,"Errrrrrrrrrrror")
        return [{
            message : "خطأ بالرقم أو المحافظة"
        }]
    }

}
