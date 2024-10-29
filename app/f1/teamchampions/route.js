// app/f1/teamchampions
export async function GET(){
    const champions=[
        {year:2000,team:"Ferrari"},
        {year:2001,team:"Ferrari"},
        {year:2002,team:"Ferrari"},
        {year:2003,team:"Ferrari"},
        {year:2004,team:"Ferrari"},
        {year:2005,team:"Renault"},
        {year:2006,team:"Renault"},
        {year:2007,team:"Ferrari"},
        {year:2008,team:"McLaren"},
        {year:2009,team:"Brawn"},
        {year:2010,team:"Red Bull"},
        {year:2011,team:"Red Bull"},
        {year:2012,team:"Red Bull"},
        {year:2013,team:"Red Bull"},
        {year:2014,team:"Mercedes"},
        {year:2015,team:"Mercedes"},
        {year:2016,team:"Mercedes"},
        {year:2017,team:"Mercedes"},
        {year:2018,team:"Mercedes"},
        {year:2019,team:"Mercedes"},
        {year:2020,team:"Mercedes"},
        {year:2021,team:"Red Bull"},
        {year:2022,team:"Red Bull"},
        {year:2023,team:"Red Bull"},
    ]

    return new Response(JSON.stringify(champions),{
        status:200,
        headers:{
            'Content-Type':'application/json'
        }
    })
}