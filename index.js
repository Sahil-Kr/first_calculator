{

    function setText(num){
        //alert(num)
        var text = document.getElementById("text_field").value;
        document.getElementById("text_field").value = text+num;

    }


    function calc(){
        var nums;
        var text = document.getElementById("text_field").value;
        if(text.includes("+")){
            nums = text.split("+");
            document.getElementById("text_field").value = Number(nums[0])+Number(nums[1]);
            
        }
        else if(text.includes("-")){
            nums = text.split("-");
            document.getElementById("text_field").value = Number(nums[0])-Number(nums[1]);
            
        }
        else if(text.includes("*")){
            nums = text.split("*");
            document.getElementById("text_field").value = Number(nums[0])*Number(nums[1]);
            
        }
        else if(text.includes("/")){
            nums = text.split("/");
            document.getElementById("text_field").value = Number(nums[0])/Number(nums[1]);
            
        }

    }

    function reset(){
        document.getElementById("text_field").value = "";
    }
}