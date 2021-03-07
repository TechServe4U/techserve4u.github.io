const footersData = [
    {
    }
];



function footerTemplate(footer) {
    return `
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div>
                        <ul>
                            <li>Programs</li>
                            <li><a href="#">E2E API Test</a></li>
                            <li><a href="#">QA API Automation Engineer</a></li>
                            <li><a href="#">E2E Web and API Automation</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <ul>
                            <li>Products</li>
                            <li><a href="https://staging.biyekorun.us/">Biye Korun</a></li>
                            <li><a href="https://wrp.techserve4u.com/">Workforce Readiness</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <ul>
                            <li>Services</li>
                            <li><a href="#">Application Development</a></li>
                            <li><a href="#">Mobile Application Development</a></li>
                            <li><a href="#">Web application development</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <ul>
                            <li>Support</li>
                            <li><a href="../help-and-faq.html">Help & FAQ</a></li>
                            <li><a href="../privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="../terms-and-conditions.html">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <p class="copyright">&copy; TechServe4u LLC 2013-2021</p>
                    <ul class="social-icon text-center">
                        <li><a href="https://www.facebook.com/techserve4u/"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCQsoLRTB8n7iPBWI1noZTiw"><i class="fab fa-youtube-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/techserve4u/"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `;
}


document.getElementById("footer").innerHTML = `
    ${footersData.map(footerTemplate).join("")}
  `;


