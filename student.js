function calculategrade()
{
    let mark1=Number(m1.value)
    let mark2=Number(m2.value)
    let mark3=Number(m3.value)
    let mark4=Number(m4.value)
    let mark5=Number(m5.value)
    // let total=mark1+mark2+mark3+mark4+mark5;
    let average=((mark1+mark2+mark3+mark4+mark5)/500)*100;
    console.log(average);
    html_data="";
    if(average>90)
    {
        
        html_data=`<div class="card">
        <div class="card-body">
          your grade id A+
        </div>
      </div>`
    }
    else if(average<90 & average>80)
    {
        html_data=`<div class="card">
        <div class="card-body">
          your grade id A
        </div>
      </div>`
    }
    else if(average<80 & average>70)
    {
        html_data=`<div class="card">
        <div class="card-body">
          your grade id B+
        </div>
      </div>`
    }
    else if(average<70 & average>60)
    {
        html_data=`<div class="card">
        <div class="card-body">
          Your grade id B
        </div>
      </div>`
    }
    else if(average<60)
    {
        html_data=`<div class="card">
        <div class="card-body">
          Your grade id C+
        </div>
      </div>`
    }
    else
    {
    
        html_data=`<div class="card">
        <div class="card-body">
          Your grade id C
        </div>
      </div>`
    
    }
    grade.innerHTML=html_data;
}