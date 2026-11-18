console.log("JS Loaded");

const startButton = document.getElementById("start-btn");
const landingPage = document.getElementById("landing-page");
const bootScreen = document.getElementById("boot-screen");
const terminal = document.getElementById("terminal");
const desktop = document.getElementById("desktop");

const loginWindow = document.getElementById("login-window");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginResult = document.getElementById("login-result");

const progress = document.getElementById("progress");
const caseProgress = document.getElementById("case-progress");

const caseIcon = document.getElementById("case-icon");
const evidenceIcon = document.getElementById("evidence-icon");
const terminalIcon = document.getElementById("terminal-icon");
const memoryIcon = document.getElementById("memory-icon");
const networkIcon = document.getElementById("network-icon");
const vaultIcon = document.getElementById("vault-icon");
const emailIcon = document.getElementById("email-icon");
const resumeIcon = document.getElementById("resume-icon");

const caseWindow = document.getElementById("case-window");
const evidenceWindow = document.getElementById("evidence-window");
const terminalWindow = document.getElementById("terminal-window");
const memoryWindow = document.getElementById("memory-window");
const networkWindow = document.getElementById("network-window");
const vaultWindow = document.getElementById("vault-window");
const emailWindow = document.getElementById("email-window");
const resumeWindow = document.getElementById("resume-window");
const logWindow = document.getElementById("log-window");

const closeCase = document.getElementById("close-case");
const closeEvidence = document.getElementById("close-evidence");
const closeTerminal = document.getElementById("close-terminal");
const closeMemory = document.getElementById("close-memory");
const closeNetwork = document.getElementById("close-network");
const closeVault = document.getElementById("close-vault");
const closeEmail = document.getElementById("close-email");
const closeResume = document.getElementById("close-resume");
const closeLog = document.getElementById("close-log");

const logFile = document.getElementById("log-file");

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const router = document.getElementById("router");
const laptop = document.getElementById("laptop");
const server = document.getElementById("server");
const attacker = document.getElementById("attacker");

const deviceInfo = document.getElementById("device-info");
const answerNetwork = document.getElementById("answer-network");
const networkResult = document.getElementById("network-result");

const unlockPassword = document.getElementById("unlock-password");
const passwordInput = document.getElementById("password-input");
const vaultResult = document.getElementById("vault-result");

const emailResult = document.getElementById("email-result");
const phishAnswers = document.querySelectorAll(".phish-answer");

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");
const memoryList = document.getElementById("memory-list");
const usbFile = document.getElementById("usb-file");

const usbWindow = document.getElementById("usb-window");

const closeUsb = document.getElementById("close-usb");
const photoFile=document.getElementById("photo-file");

const photoWindow=document.getElementById("photo-window");

const closePhoto=document.getElementById("close-photo");
const noteFile=document.getElementById("note-file");
const noteWindow=document.getElementById("note-window");
const closeNote=document.getElementById("close-note");
let recovery = 0;
let bootFinished = false;
let memoryUnlocked = false;

const bootMessages = [
    "Initializing Recovery Environment...",
    "",
    "Connecting to Recovery Server...",
    "[ OK ]",
    "",
    "Authenticating Investigator...",
    "[ OK ]",
    "",
    "Decrypting Memory Fragments...",
    "[ OK ]",
    "",
    "ACCESS GRANTED",
    "",
    "Press ENTER to continue..."
];

function updateProgress(value){

    recovery = value;

    progress.textContent = recovery + "%";
caseProgress.textContent = recovery + "%";

document.getElementById("progress-fill").style.width =
recovery + "%";
}

function typeText(messages){

    terminal.textContent = "";

    let messageIndex = 0;
    let charIndex = 0;

    function type(){

        if(messageIndex >= messages.length){

            bootFinished = true;
            return;

        }

        const currentMessage = messages[messageIndex];

        if(charIndex < currentMessage.length){

            terminal.textContent += currentMessage.charAt(charIndex);

            charIndex++;

            setTimeout(type,40);

        }

        else{

            terminal.textContent += "\n";

            messageIndex++;

            charIndex = 0;

            setTimeout(type,300);

        }

    }

    type();

}

if(startButton){

startButton.addEventListener("click",function(){

    landingPage.style.display="none";

    bootScreen.style.display="flex";

    typeText(bootMessages);

});

}

document.addEventListener("keydown",function(event){

    if(bootFinished && event.key==="Enter"){

        terminal.textContent += "\n\nLoading Desktop...";

        setTimeout(function(){

            bootScreen.style.display="none";

            if(loginWindow){

                loginWindow.style.display="block";

            }

            else{

                desktop.style.display="block";

            }

        },1200);

    }

});

if(loginBtn){

loginBtn.onclick=function(){

    if(

        username.value==="investigator" &&

        password.value==="breach"

    ){

        loginWindow.style.display="none";

        desktop.style.display="block";

    }

    else{

        loginResult.style.color="red";

        loginResult.innerHTML="Access Denied";

    }

};

}
if(caseIcon){

caseIcon.onclick=function(){

    caseWindow.style.display="block";

};

}

if(evidenceIcon){

evidenceIcon.onclick=function(){

    evidenceWindow.style.display="block";

};

}

if(terminalIcon){

terminalIcon.onclick=function(){

    terminalWindow.style.display="block";

    if(terminalInput){

        terminalInput.focus();

    }

};

}

if(memoryIcon){

memoryIcon.onclick=function(){

    memoryWindow.style.display="block";

};

}

if(networkIcon){

networkIcon.onclick=function(){

    networkWindow.style.display="block";

};

}

if(vaultIcon){

vaultIcon.onclick=function(){

    vaultWindow.style.display="block";

};

}

if(emailIcon){

emailIcon.onclick=function(){

    emailWindow.style.display="block";

};

}

if(resumeIcon && resumeWindow){

resumeIcon.onclick=function(){

    resumeWindow.style.display="block";

};

}

if(logFile){

logFile.onclick=function(){

    logWindow.style.display="block";

};

}

if(closeCase)
closeCase.onclick=function(){
    caseWindow.style.display="none";
};

if(closeEvidence)
closeEvidence.onclick=function(){
    evidenceWindow.style.display="none";
};

if(closeTerminal)
closeTerminal.onclick=function(){
    terminalWindow.style.display="none";
};

if(closeMemory)
closeMemory.onclick=function(){
    memoryWindow.style.display="none";
};

if(closeNetwork)
closeNetwork.onclick=function(){
    networkWindow.style.display="none";
};

if(closeVault)
closeVault.onclick=function(){
    vaultWindow.style.display="none";
};

if(closeEmail)
closeEmail.onclick=function(){
    emailWindow.style.display="none";
};

if(closeResume)
closeResume.onclick=function(){
    resumeWindow.style.display="none";
};

if(closeLog)
closeLog.onclick=function(){
    logWindow.style.display="none";
};
noteFile.onclick=function(){

noteWindow.style.display="block";

};

closeNote.onclick=function(){

noteWindow.style.display="none";

};

if(terminalInput){

terminalInput.addEventListener("keydown",function(event){

    if(event.key!=="Enter") return;

    const command=terminalInput.value.trim().toLowerCase();

    terminalOutput.innerHTML+=
    "<br><span class='green'>&gt;</span> "+command;

    if(command==="help"){

        terminalOutput.innerHTML+=
        "<br><br>Available Commands"+
        "<br>help"+
        "<br>dir"+
        "<br>decrypt"+
        "<br>status"+
        "<br>clear";

    }

    else if(command==="dir"){

        terminalOutput.innerHTML+=
        "<br>CaseFiles/"+
        "<br>Evidence/"+
        "<br>Memory/"+
        "<br>Vault/"+
        "<br>Email/"+
        "<br>Resume.pdf";

    }

    else if(command==="decrypt"){

        terminalOutput.innerHTML+=
        "<br>Decrypting memory fragment..."+
        "<br>Success.";

    }

    else if(command==="status"){

        terminalOutput.innerHTML+=
        "<br>Recovery Progress : "+recovery+"%";

    }

    else if(command==="clear"){

        terminalOutput.innerHTML="";

    }
    else if(command==="scan"){

terminalOutput.innerHTML+=
"<br>Scanning network..." +
"<br>1 infected device found.";

}

else if(command==="whoami"){

terminalOutput.innerHTML+=
"<br>investigator";

}

else if(command==="date"){

terminalOutput.innerHTML+=
"<br>12 July 2026";

}
else if(command==="matrix"){

terminalOutput.innerHTML+=

"<br>Wake up, Investigator...";

}

    else{

        terminalOutput.innerHTML+=
        "<br>Unknown command.";

    }

    terminalInput.value="";

    terminalOutput.scrollTop=
    terminalOutput.scrollHeight;

});

}


answers.forEach(function(button){

button.addEventListener("click",function(){

    const answer=this.dataset.answer;

    if(answer==="usb"){

        result.style.color="lime";

        result.innerHTML=
        "✔ Correct! USB Device introduced the malware.";

        if(!memoryUnlocked){

            memoryUnlocked=true;

            updateProgress(25);

            memoryList.innerHTML=`

            <div class="memory-card">

                <h3>Memory Fragment #1</h3>

                <p><strong>Recovered Skills</strong></p>

                <p>Java</p>

                <p>Python</p>

                <p>C++</p>

                <p>SQL</p>

            </div>

            `;

        }

    }

    else{

        result.style.color="red";

        result.innerHTML=
        "✖ Incorrect. Review the logs again.";

    }

});

});
router.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Firewall</h3><p>No suspicious activity detected.</p>";

};

server.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>File Server</h3><p>Files were encrypted after malware execution.</p>";

};

attacker.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Unknown Device</h3><p>External connection detected after infection.</p>";

};

laptop.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Employee PC</h3><p>USB inserted. Malware executed. Initial compromise started here.</p>";

};
usbFile.onclick = function(){

    usbWindow.style.display = "block";

};
closeUsb.onclick = function(){

    usbWindow.style.display = "none";

};
photoFile.onclick=function(){

    photoWindow.style.display="block";

};
closePhoto.onclick=function(){

    photoWindow.style.display="none";

};

if(answerNetwork){

answerNetwork.onclick=function(){

    networkResult.style.color="lime";

    networkResult.innerHTML=
    "✔ Correct! Employee PC was the first compromised device.";

    if(recovery<50){

        updateProgress(50);

    }

};

}

if(unlockPassword){

unlockPassword.onclick=function(){

    const enteredPassword=passwordInput.value.trim().toLowerCase();

    if(enteredPassword==="java"){

        vaultResult.style.color="lime";

        vaultResult.innerHTML=
        "✔ Vault Successfully Unlocked";

        if(recovery<75){

            updateProgress(75);

        }

        memoryList.innerHTML+=`

        <div class="memory-card">

            <h3>Memory Fragment #2</h3>

            <p><strong>Favorite Language</strong></p>

            <p>Java</p>

        </div>

        `;

    }

    else{

        vaultResult.style.color="red";

        vaultResult.innerHTML=
        "Incorrect Password";

    }

};

}

phishAnswers.forEach(function(button){

button.addEventListener("click",function(){

    if(this.dataset.answer==="sender"){

        emailResult.style.color="lime";

        emailResult.innerHTML=
        "✔ Correct! Fake sender detected. This is a phishing email.";

        updateProgress(100);

        if(resumeIcon){

            resumeIcon.style.opacity="1";

            resumeIcon.style.pointerEvents="auto";

        }

        if(resumeWindow){

            const resumeContent=
            resumeWindow.querySelector(".window-content");

            if(resumeContent){

                resumeContent.innerHTML=`

                <h2>Identity Restored</h2>

                <hr>

                <h3>Rishima Sharma</h3>

                <p><strong>Cyber Security Student</strong></p>

                <p>Java | Python | C++ | SQL</p>

                <p>HTML | CSS | JavaScript</p>

                <p>AWS | Wireshark | Nmap</p>

                <p>Git | GitHub</p>

                <br>

                <p>
                Congratulations Investigator!
                Your digital identity has been restored.
                </p>

                `;

            }

        }

        setTimeout(function(){

            alert(
            "🎉 Investigation Complete!\n\nIdentity Successfully Restored!"
            );

        },500);

    }

    else{

        emailResult.style.color="red";

        emailResult.innerHTML=
        "✖ Incorrect. Inspect the sender and links carefully.";

    }

});

});
let highestZ = 100;

function bringToFront(windowElement){

    if(!windowElement) return;

    highestZ++;

    windowElement.style.zIndex = highestZ;

}

[
caseWindow,
evidenceWindow,
terminalWindow,
logWindow,
memoryWindow,
networkWindow,
vaultWindow,
emailWindow,
resumeWindow,
loginWindow

].forEach(function(win){

    if(!win) return;

    win.addEventListener("mousedown",function(){

        bringToFront(win);

    });

});

function makeDraggable(windowElement){

    if(!windowElement) return;

    const header = windowElement.querySelector(".window-header");

    if(!header) return;

    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    header.addEventListener("mousedown",function(e){

        dragging = true;

        bringToFront(windowElement);

        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;

        document.body.style.userSelect = "none";

    });

    document.addEventListener("mousemove",function(e){

        if(!dragging) return;

        windowElement.style.left =
        (e.clientX - offsetX) + "px";

        windowElement.style.top =
        (e.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup",function(){

        dragging = false;

        document.body.style.userSelect = "auto";

    });

}

makeDraggable(caseWindow);
makeDraggable(evidenceWindow);
makeDraggable(terminalWindow);
makeDraggable(logWindow);
makeDraggable(memoryWindow);
makeDraggable(networkWindow);
makeDraggable(vaultWindow);
makeDraggable(emailWindow);
makeDraggable(resumeWindow);
makeDraggable(loginWindow);
makeDraggable(usbWindow);
makeDraggable(photoWindow);
makeDraggable(noteWindow);
window.onload = function(){

    updateProgress(0);

    if(resumeIcon){

        resumeIcon.style.opacity = "0.4";

        resumeIcon.style.pointerEvents = "none";

    }

};

// ---------------------------------------------------------------------------
// Defensive investigation tools added for portfolio demonstrations.
// All analysis runs locally in the browser; no uploaded evidence is transmitted.
// ---------------------------------------------------------------------------
(function initializeInvestigationTools() {
  const byId = (id) => document.getElementById(id);
  const openWindow = (id) => { const el = byId(id); if (el) el.style.display = "block"; };

  const toolLaunchers = {
    "siem-icon": "siem-window",
    "pcap-icon": "pcap-window",
    "base64-icon": "base64-window",
    "headers-icon": "headers-window",
    "mitre-icon": "mitre-window",
    "canvas-icon": "canvas-window"
  };
  Object.entries(toolLaunchers).forEach(([launcher, win]) => {
    const el = byId(launcher);
    if (el) el.addEventListener("click", () => openWindow(win));
  });
  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = byId(button.dataset.close);
      if (target) target.style.display = "none";
    });
  });

  // SIEM: parse simple key=value events and flag suspicious SQLi indicators.
  const sqliPatterns = [
    { name: "UNION SELECT", regex: /\bunion\s+(?:all\s+)?select\b/i },
    { name: "Boolean condition", regex: /(?:'|")\s*(?:or|and)\s+[\w'"]+\s*=\s*[\w'"]+/i },
    { name: "Comment truncation", regex: /(?:--|#|\/\*)/ },
    { name: "Time-delay function", regex: /\b(?:sleep|benchmark|pg_sleep)\s*\(/i },
    { name: "Stacked statement", regex: /;\s*(?:select|insert|update|delete|drop)\b/i }
  ];
  const siemButton = byId("siem-analyze");
  if (siemButton) siemButton.addEventListener("click", () => {
    const raw = byId("siem-input").value.trim();
    const lines = raw ? raw.split(/\r?\n/).filter(Boolean) : [];
    const events = lines.map((line, index) => {
      const fields = {};
      for (const match of line.matchAll(/([\w.-]+)=("[^"]*"|'[^']*'|\S+)/g)) {
        fields[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
      const findings = sqliPatterns.filter((p) => p.regex.test(line)).map((p) => p.name);
      return { line, index: index + 1, fields, findings };
    });
    const flagged = events.filter((e) => e.findings.length);
    const out = byId("siem-results");
    out.replaceChildren();
    const summary = document.createElement("p");
    summary.textContent = `Parsed ${events.length} event(s); ${flagged.length} event(s) contain SQL injection indicators.`;
    out.appendChild(summary);
    events.forEach((event) => {
      const row = document.createElement("div");
      row.className = "result-row";
      const title = document.createElement("strong");
      title.textContent = `Event ${event.index}: ${event.findings.length ? "SUSPICIOUS" : "No matched indicator"}`;
      const detail = document.createElement("p");
      detail.textContent = event.findings.length
        ? `Indicators: ${event.findings.join(", ")}`
        : `event=${event.fields.event || "unknown"} | user=${event.fields.user || "unknown"} | src=${event.fields.src || "unknown"}`;
      const code = document.createElement("code");
      code.textContent = event.line;
      row.append(title, detail, code);
      out.appendChild(row);
    });
    renderMitre(events);
  });

  // Base64: decode UTF-8 safely, including non-ASCII characters.
  const decodeButton = byId("base64-decode");
  if (decodeButton) decodeButton.addEventListener("click", () => {
    const input = byId("base64-input").value.trim();
    const output = byId("base64-result");
    try {
      if (!input || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(input)) {
        throw new Error("Input is empty or is not valid padded Base64.");
      }
      const binary = atob(input);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      output.textContent = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    } catch (error) {
      output.textContent = `Unable to decode: ${error.message}`;
    }
  });

  // Header triage: extract reported SPF, DKIM and DMARC outcomes.
  const headerButton = byId("headers-analyze");
  if (headerButton) headerButton.addEventListener("click", () => {
    const raw = byId("headers-input").value;
    const unfolded = raw.replace(/\r?\n[ \t]+/g, " ");
    const authLines = unfolded.split(/\r?\n/).filter((line) => /^(authentication-results|received-spf):/i.test(line));
    const result = byId("headers-results");
    result.replaceChildren();
    if (!authLines.length) {
      result.textContent = "No Authentication-Results or Received-SPF header was found. This does not mean the message passed authentication.";
      return;
    }
    const combined = authLines.join(" ").toLowerCase();
    ["spf", "dkim", "dmarc"].forEach((method) => {
      const match = combined.match(new RegExp("\\b" + method + "\\s*=\\s*(pass|fail|softfail|neutral|none|temperror|permerror)", "i"));
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = `${method.toUpperCase()}: `;
      p.append(strong, document.createTextNode(match ? match[1].toUpperCase() : "Not reported"));
      result.appendChild(p);
    });
    const note = document.createElement("p");
    note.textContent = "Triage only: these are values asserted by the receiving mail system. Confirm the trusted Authentication-Results header and mail gateway context before treating them as authoritative.";
    result.appendChild(note);
  });

  // Classic PCAP parser: Ethernet II -> IPv4 -> TCP/UDP. No payload reconstruction.
  const pcapInput = byId("pcap-file");
  if (pcapInput) pcapInput.addEventListener("change", async () => {
    const file = pcapInput.files && pcapInput.files[0];
    const output = byId("pcap-results");
    if (!file) return;
    try {
      const buffer = await file.arrayBuffer();
      const view = new DataView(buffer);
      if (view.byteLength < 24) throw new Error("File is too small to be a classic PCAP capture.");
      const magic = view.getUint32(0, false);
      let little, nano = false;
      if (magic === 0xa1b2c3d4) little = false;
      else if (magic === 0xd4c3b2a1) little = true;
      else if (magic === 0xa1b23c4d) { little = false; nano = true; }
      else if (magic === 0x4d3cb2a1) { little = true; nano = true; }
      else throw new Error("Unsupported capture format. Please provide a classic .pcap file (not PCAPNG).");
      const linkType = view.getUint32(20, little);
      if (linkType !== 1) throw new Error(`Unsupported link type ${linkType}; this parser expects Ethernet (link type 1).`);
      let offset = 24, count = 0, ipv4 = 0, tcp = 0, udp = 0, other = 0;
      const conversations = new Map(), sample = [];
      while (offset + 16 <= view.byteLength) {
        const inclLen = view.getUint32(offset + 8, little);
        offset += 16;
        if (inclLen > view.byteLength - offset) throw new Error("Capture ends in an incomplete packet record.");
        if (inclLen < 14) { offset += inclLen; count++; other++; continue; }
        let ipOffset = offset + 14;
        let etherType = view.getUint16(offset + 12, false);
        if (etherType === 0x8100 || etherType === 0x88a8) {
          if (inclLen < 18) { offset += inclLen; continue; }
          etherType = view.getUint16(offset + 16, false); ipOffset += 4;
        }
        count++;
        if (etherType === 0x0800 && ipOffset + 20 <= offset + inclLen) {
          const versionIhl = view.getUint8(ipOffset);
          const ihl = (versionIhl & 15) * 4;
          if ((versionIhl >> 4) === 4 && ihl >= 20 && ipOffset + ihl <= offset + inclLen) {
            ipv4++;
            const src = [1,2,3,4].map(i => view.getUint8(ipOffset + 12 + i - 1)).join(".");
            const dst = [1,2,3,4].map(i => view.getUint8(ipOffset + 16 + i - 1)).join(".");
            const proto = view.getUint8(ipOffset + 9);
            let protocol = "Other", srcPort = "", dstPort = "";
            if ((proto === 6 || proto === 17) && ipOffset + ihl + 4 <= offset + inclLen) {
              srcPort = view.getUint16(ipOffset + ihl, false);
              dstPort = view.getUint16(ipOffset + ihl + 2, false);
              protocol = proto === 6 ? "TCP" : "UDP";
              if (proto === 6) tcp++; else udp++;
            } else other++;
            const key = `${src}:${srcPort} → ${dst}:${dstPort} (${protocol})`;
            conversations.set(key, (conversations.get(key) || 0) + 1);
            if (sample.length < 12) sample.push(key);
          } else other++;
        } else other++;
        offset += inclLen;
      }
      output.replaceChildren();
      const summary = document.createElement("p");
      summary.textContent = `File: ${file.name} | Packets: ${count} | IPv4: ${ipv4} | TCP: ${tcp} | UDP: ${udp} | Other/non-IPv4: ${other} | Timestamp precision: ${nano ? "nanoseconds" : "microseconds"}`;
      output.appendChild(summary);
      const heading = document.createElement("h3"); heading.textContent = "Observed conversations"; output.appendChild(heading);
      const list = document.createElement("ul");
      [...conversations.entries()].sort((a,b) => b[1]-a[1]).slice(0,30).forEach(([flow, packets]) => {
        const li = document.createElement("li"); li.textContent = `${flow} — ${packets} packet(s)`; list.appendChild(li);
      });
      output.appendChild(list);
      const caveat = document.createElement("p"); caveat.textContent = "Metadata parser only: it does not reassemble TCP streams, decrypt traffic, decode application protocols, or replace Wireshark."; output.appendChild(caveat);
    } catch (error) {
      output.textContent = `PCAP analysis failed: ${error.message}`;
    }
  });

  // MITRE ATT&CK mapping from evidence indicators. This is transparent rule-based mapping.
  function renderMitre(events = []) {
    const corpus = events.map(e => e.line).join("\n").toLowerCase();
    const rules = [
      { id: "T1091", name: "Replication Through Removable Media", tactic: "Initial Access", why: "USB/removable-media event in the incident evidence." , test: /usb|removable media/ },
      { id: "T1059.001", name: "PowerShell", tactic: "Execution", why: "PowerShell process execution is present in the incident evidence.", test: /powershell/ },
      { id: "T1204.002", name: "Malicious File", tactic: "Execution", why: "A suspicious executable disguised as a document is referenced.", test: /invoice\.pdf\.exe|malicious file/ },
      { id: "T1071.001", name: "Web Protocols", tactic: "Command and Control", why: "Outbound web-like communication is indicated; protocol confirmation is needed.", test: /outbound connection|http|https/ },
      { id: "T1486", name: "Data Encrypted for Impact", tactic: "Impact", why: "The evidence reports files being encrypted.", test: /files encrypted|file encryption/ },
      { id: "T1190", name: "Exploit Public-Facing Application", tactic: "Initial Access", why: "SQL injection indicators may be relevant to exploitation of a public-facing application.", test: /union\s+(?:all\s+)?select|sleep\s*\(|benchmark\s*\(/ }
    ];
    const matches = rules.filter(rule => rule.test.test(corpus) || (events.length === 0 && /usb|powershell|invoice\.pdf\.exe|outbound connection|files encrypted/i.test(document.body.innerText) && rule.id !== "T1190"));
    const target = byId("mitre-results");
    if (!target) return;
    target.replaceChildren();
    (matches.length ? matches : rules.slice(0, 5)).forEach(rule => {
      const card = document.createElement("div"); card.className = "result-row";
      const title = document.createElement("strong"); title.textContent = `${rule.id} — ${rule.name}`;
      const meta = document.createElement("p"); meta.textContent = `Tactic: ${rule.tactic}`;
      const why = document.createElement("p"); why.textContent = rule.why;
      card.append(title, meta, why); target.appendChild(card);
    });
    const disclaimer = document.createElement("p"); disclaimer.textContent = "Mappings are analyst hypotheses based on available indicators. Validate each technique against full telemetry and the current MITRE ATT&CK knowledge base."; target.appendChild(disclaimer);
  }
  renderMitre();

  // Canvas API animation: animated telemetry traces and nodes.
  const canvas = byId("telemetry-canvas");
  const toggle = byId("canvas-toggle");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let running = false, frame = 0, raf = 0;
    const nodes = [{x:75,y:150},{x:260,y:65},{x:260,y:235},{x:475,y:150},{x:680,y:150}];
    const edges = [[0,1],[0,2],[1,3],[2,3],[3,4]];
    function draw() {
      if (!running) return;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = "#050805"; ctx.fillRect(0,0,w,h);
      ctx.strokeStyle = "rgba(0,255,80,.45)"; ctx.lineWidth = 2;
      edges.forEach(([a,b]) => { ctx.beginPath(); ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y); ctx.stroke(); });
      edges.forEach(([a,b], i) => {
        const t = ((frame * 0.008 + i * 0.21) % 1);
        const x = nodes[a].x + (nodes[b].x-nodes[a].x)*t;
        const y = nodes[a].y + (nodes[b].y-nodes[a].y)*t;
        ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle = "#b6ff00"; ctx.fill();
      });
      nodes.forEach((node,i) => {
        ctx.beginPath(); ctx.arc(node.x,node.y, i===4 ? 19 : 15,0,Math.PI*2);
        ctx.fillStyle = i===4 ? "#5b1717" : "#12351c"; ctx.fill();
        ctx.strokeStyle = i===4 ? "#ff5555" : "#00ff66"; ctx.stroke();
        ctx.fillStyle = "#eaffea"; ctx.font = "13px Arial"; ctx.textAlign = "center";
        ctx.fillText(["Firewall","Workstation","File Server","Gateway","External"][i],node.x,node.y+34);
      });
      frame++; raf = requestAnimationFrame(draw);
    }
    if (toggle) toggle.textContent = "Start Animation";
    const canvasLauncher = byId("canvas-icon");
    if (canvasLauncher) canvasLauncher.addEventListener("click", () => {
      if (!running) {
        running = true;
        if (toggle) toggle.textContent = "Pause Animation";
        draw();
      }
    });
    if (toggle) toggle.addEventListener("click", () => {
      running = !running;
      toggle.textContent = running ? "Pause Animation" : "Resume Animation";
      if (running) draw(); else { cancelAnimationFrame(raf); raf = 0; }
    });
    const canvasWin = byId("canvas-window");
    if (canvasWin) canvasWin.addEventListener("click", () => { if (running && !raf) draw(); });
  }
})();
