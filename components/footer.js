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
                            <li><a href="programs/Software-Quality-Engineer_E2E-API-Test.html">E2E API Test</a></li>
                            <li><a href="programs/QA-API-Automation-Engineer.html">QA API Automation Engineer</a></li>
                            <li><a href="programs/Software-Quality-Engineer_E2E-Web-and-API-Automation.html">E2E Web and API Automation</a></li>
                            <li><a href="programs/Software-Quality-Engineer_Web-and-Database.html">QE Web and Database</a></li>
                            <li><a href="programs/Software-Quality-Engineer_Web-and-Mobile.html">QE Web and Mobile</a></li>
                            <li><a href="programs/DevOps-Engineer_CICD-Pipeline.html">DevOps Engineer CICD Pipeline</a></li>
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
                            <li><a href="service-details.html">Application Development</a></li>
                            <li><a href="service-details.html">Mobile Application Development</a></li>
                            <li><a href="service-details.html">Web application development</a></li>
                            <li><a href="service-details.html">Software QA and Testing</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <ul>
                            <li>Support</li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="help-and-faq.html">Help & FAQ</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
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


