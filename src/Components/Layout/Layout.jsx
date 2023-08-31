import Desktop from "../Desktop/Desktop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



export default ({children})=>{
    return (
      
        <section className="mains_layout">
          <Header />
          {children}
          <Desktop/>
          <Footer/>
        </section>
 
    );
}