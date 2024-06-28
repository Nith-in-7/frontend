function Nav() {
    return (
        <div style={{backgroundImage:"url(bg.png)",backgroundSize:"cover",height:"100vh",display:"flex",flexDirection:"column",justifyContent: "center", alignItems:"center"}} >
            <h1 style={{textAlign: "center",color:"black"}}>Jyothi Engineering College</h1>

           <div>
           <a href="/SignUp"><button >REGISTER</button></a>
           </div>
           <div>
           <a href="/Login"><button>LOGIN</button></a>
           </div>
            
        </div>
    )
}

export default Nav
