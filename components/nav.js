const navsData = [
    {
    }
];



function navTemplate(nav) {
    return `
    <div class="icon-bar" style="z-index: 100000;">
        <a href="https://wa.me/15866653331" target="_blank" class="twitter"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/techserve4u/" target="_blank" class="facebook"><i
                class="fab fa-facebook"></i></a>
        <a href="https://www.youtube.com/channel/UCQsoLRTB8n7iPBWI1noZTiw" target="_blank" class="youtube"><i
                class="fab fa-youtube"></i></a>
        <a href="https://join.slack.com/t/techserve4ullc/shared_invite/zt-mik6lmar-mpTFcBIOi~uQiuYxfFsUBA"
            target="_blank" class="google"><i class="fab fa-slack"></i></a>
        <a href="https://www.linkedin.com/company/techserve4u/" target="_blank" class="linkedin"><i
                class="fab fa-linkedin"></i></a>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Our Next Live</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="images/live/next-live.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="images/live/next-live.jpg" alt="Second slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="https://www.facebook.com/techserve4u/" target="_blank" class="btn btn-primary">Join
                        us on Facebook</a>
                    <a href="https://www.youtube.com/channel/UCQsoLRTB8n7iPBWI1noZTiw" target="_blank"
                        class="btn btn-danger">Join us on YouTube</a>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="d-flex">
            <div class="mr-auto p-2 navbar navbar-expand-lg navbar-expand-sm">
                <ul class="navbar-nav mr-auto up-nav">
                    <li class="nav-item"><a class="nav-link nav-link2 call" href="tel:+15868348526"><i
                                class="nav-icon fas fa-phone-alt"></i>
                            <small><b>+(1) 586-834-8526</b></small></a></li>
                    <li class="nav-item"><a class="nav-link nav-link2 email" href="mailto:info@techserve4u.com"><i
                                class="nav-icon fas fa-envelope"></i>
                                <small><b>info@techserve4u.com</b></small></a></li>
                    <li class="nav-item"><a class="nav-link nav-link2 address"
                            href="https://www.google.com/search?client=firefox-b-d&q=techserve4u" target="_blank"><i
                                class="nav-icon fas fa-search-location"></i> <small><b>Warren,
                            MI</b></small></a></li>
                    <li class="nav-item"><a class="nav-link nav-link2"
                    href="https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBxoiqdC61bDfmJlP8CPPaMSmHeLx109YRgTF7nXxfcd7_FMjZsUYvu1e_nfshEFBo*" target="_blank"><i
                        class="nav-icon fas fa-sign-in-alt ldi"></i> <small><b>Enrollment</b></small></a></li>        
                </ul>
            </div>
            <div class="p-2 navbar navbar-expand-lg navbar-expand-sm">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link nav-link2" href="https://www.facebook.com/techserve4u/"
                            target="_blank"><i class="nav-icon fab fa-facebook-square fb"></i></a>
                    </li>
                    <li class="nav-item"><a class="nav-link nav-link2"
                            href="https://www.youtube.com/channel/UCQsoLRTB8n7iPBWI1noZTiw" target="_blank"><i
                                class="nav-icon fab fa-youtube-square yt"></i></a></li>
                    <li class="nav-item"><a class="nav-link nav-link2" href="https://www.linkedin.com/company/techserve4u/"
                            target="_blank"><i class="nav-icon fab fa-linkedin ldi"></i></a>
                    </li>
                    <li class="nav-item"><a class="nav-link nav-link2" href="https://join.slack.com/t/techserve4ullc/shared_invite/zt-mik6lmar-mpTFcBIOi~uQiuYxfFsUBA"
                            target="_blank"><i class="nav-icon fab fa-slack sl"></i></a>
                    </li>
                    
                    <li class="nav-item"><a class="nav-link nav-link2 live" href="#" data-toggle="modal"
                            data-target="#exampleModal"><small><b>&#9679; Live</b></small></a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;


