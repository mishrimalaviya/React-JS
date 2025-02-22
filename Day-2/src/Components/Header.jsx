import "../Index.css"

function Header() {
    return (
        <div class="w-100 d-flex justify-content-evenly align-items-center " id="div1">
            <div class="  h-100 fs-4 text-light d-flex justify-content-evenly align-items-center" id="di1">
                <div class="w-75  d-flex justify-content-evenly align-items-center">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
            <div class=" d-flex justify-content-center align-items-center  h-100" id="di2">
                <img src="https://profecient.jegtheme.com/protailor/wp-content/uploads/sites/23/2024/02/protailor-logo.webp" class="ms-4 w-50 h-50"></img>
            </div>
            <div class="w-25  h-100 d-flex justify-content-center align-items-center">
                <i class="bi bi-search text-light me-3"> </i>
                <button class="btn rounded-pill p-2 ps-4 pe-4 text-light border border-1">Contact Us</button>
            </div>

        </div>
        
       
    )
}

export default Header