let btn=document.getElementById('submit')
let btnUp=document.getElementById('upload')

btn.addEventListener('click',(event)=>{
  let form=document.getElementById('form')
  
  let formData=new FormData(form)
  let userInfo={
    name:formData.get('name'),
    age:formData.get('age')
  }
  // 获取表格节点
  let tbody=document.getElementsByTagName('tbody')[0]
  // 创建行与列
  let tr=document.createElement('tr')
  let name=document.createElement('td')
  let age=document.createElement('td')
  // 向表格中添加行
  tbody.appendChild(tr)
  // 向行中添加姓名列
  tr.appendChild(name)
  // 向行中添加年龄列
  tr.appendChild(age)
  // 给添加的列赋值
  name.innerText=userInfo.name
  age.innerText=userInfo.age
  event.preventDefault()
})

btnUp.addEventListener('click',event=>{
  const userList=[]
  let td=document.getElementsByTagName('td')
  for (let index = 0; index < td.length; index++) {
    userInfo={
      name:td[index].innerText,
      age:td[index+1].innerText
    }
    index++
    userList.push(userInfo)
  }
  console.log(userList);
  alert('表格数据已输出到控制台')
  event.preventDefault()
})