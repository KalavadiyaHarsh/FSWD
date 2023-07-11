let array = [10000,20000,30,400,5000];
    let maxsal = harsh(array);
    console.log(maxsal);
    function harsh(array)
    {
        let max = 0;
        for(let i=0;i <= array.length;i++)
        {
            if(array[i]>max)
            {
                max = array[i];
            }
        }
        return max;
    }
