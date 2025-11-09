function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("boff"))
        {
            bulb.src = "bon.jpg";
        }
    else
        {
            bulb.src = "boff.jpg"; 
        }
}