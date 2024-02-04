import '../pagecss/modules.home.css'

function Home() {
    function Reload() {
        window.location.reload();
    }

    return (
       <div>
          <p className='hello'>Hello!</p>
          <button className='buttonadicione' onClick={Reload}>Adicione</button>
       </div>
    );
}

export default Home;