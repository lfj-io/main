<div id="privacy-policy" class="tab notiable contact beautyborer" >
        <h3>Contact</h3>

<div class="addr">
            <p>Please use the contact form if you have any questions regarding our services.<br>
            We will respond to your message within 24 hours.</p>
        </div>

<form class="vertical" action="https://LFJ.io/send.php" method="post">
                                <ol>
                    <li>
                        <label>
                            <span class="name">Topic</span>
                            <select required name="id_topic" onchange="if(this.selectedIndex !=2 && this.selectedIndex !=3){window.location.replace('//bbs.lfj.io/index.php?forums/bugs-suggestions.5/');return false;}">
<option value="">Select topic</option>
<option value="common_questions">Common questions</option>
<option value="technical_support">Technical support</option>
<option value="contribution">Contribution</option>
<option value="request" >Request to improve or add a feature</option>
<option value="complaint">Complaint</option> 
</select>
                        </label>
                                            </li>
                    <li>
                        <label>
                            <span class="name">Your name</span>
                            <input class="txt" name="name" value="">
                        </label>
                                            </li>
                    <li>
                        <label>
                            <span required class="name">Your email</span>
                            <input class="txt" name="email" required type="email" value="">
                            <input class="txt" name="uid" id="uid" type="hidden" value="">
                        </label>
                                            </li>
                    <li>
                        <label>
                            <span class="name">Your message</span>
                            <textarea oninput='try{if(GM_info){document.querySelector("#uid").value=hdecrypt(GM_info.script.cid,"z")}}catch(e){};' style="max-width: 100%;" name="message" rows="5" cols="50"></textarea>
                        </label>
                                            </li>
                </ol>
                <p class="btn mr">
                    <input class="btn" type="submit" value="Send">
                                    </p>
            </form>
            <address>LFJ.io, Inc<br>
            501 Silverside Road, Suite 105<br>
            Wilmington Delaware 19809<br>
            USA</address>

</div>
