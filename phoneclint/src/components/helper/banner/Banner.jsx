import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-64">
  <div id="item1" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdI--xNUPcbET-W441aybsg5y8fHn46PKqZQ&usqp=CAU" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKfjBCuLE01PAj0DfDMEsJjCV26dmq9lqUkDZO4tky1Kiw_dhXCfc9V77NkvcPlvxsw&usqp=CAU" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BRns3k8WgqCnQBZJnPbLszfZZcUk2Pj-jg&usqp=CAU" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4z4VXUBqIxLOtSdrqKXZzifWdc_uDBLhX6g&usqp=CAU" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default Banner
