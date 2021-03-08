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
                    <img class="popup" src="images/live/next-live.jpg" alt="">
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
                    <li class="nav-item"><a class="nav-link call" href="tel:+15868348526"><i
                                class="nav-icon fas fa-phone-alt"></i>
                            <small>+(1) 586-834-8526</small></a></li>
                    <li class="nav-item"><a class="nav-link email" href="mailto:info@techserve4u.com"><i
                                class="nav-icon fas fa-envelope"></i>
                                <small>info@techserve4u.com</small></a></li>
                    <li class="nav-item"><a class="nav-link address"
                            href="https://www.google.com/search?client=firefox-b-d&q=techserve4u" target="_blank"><i
                                class="nav-icon fas fa-search-location"></i> <small>Warren,
                            MI</small></a></li>
                    <li class="nav-item"><a class="nav-link"
                    href="https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBxoiqdC61bDfmJlP8CPPaMSmHeLx109YRgTF7nXxfcd7_FMjZsUYvu1e_nfshEFBo*" target="_blank"><i
                        class="nav-icon fas fa-sign-in-alt ldi"></i> <small>Enrollment</small></a></li>        
                </ul>
            </div>
            <div class="p-2 navbar navbar-expand-lg navbar-expand-sm">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/techserve4u/"
                            target="_blank"><i class="nav-icon fab fa-facebook-square fb"></i></a>
                    </li>
                    <li class="nav-item"><a class="nav-link"
                            href="https://www.youtube.com/channel/UCQsoLRTB8n7iPBWI1noZTiw" target="_blank"><i
                                class="nav-icon fab fa-youtube-square yt"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/company/techserve4u/"
                            target="_blank"><i class="nav-icon fab fa-linkedin ldi"></i></a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="https://join.slack.com/t/techserve4ullc/shared_invite/zt-mik6lmar-mpTFcBIOi~uQiuYxfFsUBA"
                            target="_blank"><i class="nav-icon fab fa-slack sl"></i></a>
                    </li>
                    
                    <li class="nav-item"><a class="nav-link live" href="#" data-toggle="modal"
                            data-target="#exampleModal"><small>&#9679; Live</small></a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;


