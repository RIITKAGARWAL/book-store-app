import React from 'react'

function temp() {

  return (
    <div>
      const [sticky, setSticky] = useState(false);
useEffect(() => {
  const handleScroll = () => {
  if(window.scrollY > 0)
    {setSticky(true);}
  else
  {setSticky(false);}
  
};
window.addEventListener("scroll",handleScroll);
return () => {
  window.removeEventListener("scroll",handleScroll);
};
},[]
);

    </div>
  )
}

export default temp
