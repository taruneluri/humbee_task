function add(){
    var name=document.getElementById('cusname').value;
    var vehno=document.getElementById('cusreg').value;
    var mob=document.getElementById('cusmob').value;
    var slotno=document.getElementById('slot').value;
    if(name.length==0 || vehno.length==0 || mob.length==0 ||slotno==0)
    {
        alert("Please Enter All Values");
    }
    else if(slotno<0 ||slotno>50 )
    {
        alert("Slot should be between 1 and 50 ");
    }
    else
    {
        const div=document.createElement("div");
        // div.setAttribute('value',a);
        div.classList.add('division');
        div.innerHTML='<span>Slot No. :'+slotno+' </span><br/><span>Name : '+name+'</span><br/><span>Reg. No. : '+vehno+'</span><br/><span>Mobile No. :'+mob+' </span><br/><button class="btn btn-danger">Leave</button>';
        document.getElementById('par').appendChild(div);
        div.addEventListener('click',function(){div.remove();})
    }
}