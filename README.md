# The Breach — Interactive Cybersecurity Portfolio

**The Breach** is an interactive cybersecurity storytelling experience designed as a simulated Security Operations Center (SOC) desktop environment.

Instead of presenting a traditional portfolio, visitors investigate a fictional cyberattack that has erased a digital identity. By exploring case files, analyzing evidence, interacting with a terminal, and solving cybersecurity challenges, visitors gradually recover information and reconstruct the identity.

🌐 **Live Demo:** https://rishima115.github.io/The-Breach/

## Key Features

- **Interactive Boot Sequence:** Simulates system startup and investigator authentication.
- **SOC Desktop Environment:** Operating-system-style interface with interactive applications.
- **Incident Case Files:** Presents a fictional security incident and investigation objectives.
- **Evidence Locker:** Interface for exploring investigation evidence.
- **Interactive Terminal:** Supports command-based interaction.
- **Network Investigation:** Simulated network environment with connected devices.
- **Password Vault:** Password-based evidence unlocking.
- **Phishing Investigation:** Identifies suspicious email activity.
- **SIEM Log Analyzer:** Parses security events and detects SQL injection indicators.
- **PCAP Analyzer:** Parses classic PCAP files and extracts packet metadata, IP addresses, ports and protocols.
- **Base64 Decoder:** Decodes Base64 input with validation and error handling.
- **Email Header Triage:** Extracts reported SPF, DKIM and DMARC authentication results.
- **MITRE ATT&CK Mapping:** Maps investigation evidence to relevant ATT&CK technique IDs and tactics.
- **Canvas API Animation:** Visualizes network telemetry using HTML Canvas and JavaScript animation.
- **Dynamic Progress Tracking:** Displays investigation and identity recovery progress.

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- HTML Canvas API
- DOM Manipulation
- Event-Driven Programming
- File API and ArrayBuffer
- PCAP Binary Parsing
- Regular Expressions
- MITRE ATT&CK Framework

## Project Structure

```text
The-Breach/
│
├── assets/
│   ├── audio/
│   ├── evidence/
│   ├── fonts/
│   ├── images/
│   └── videos/
│
├── css/
│   └── style.css
│
├── docs/
│   └── story.md
│
├── js/
│   └── script.js
│
├── samples/
│   ├── base64-example.txt
│   ├── demo-traffic.pcap
│   ├── email-headers.txt
│   └── security-events.log
│
├── index.html
└── README.md
```

## Implemented Cybersecurity Tools

### 1. SIEM Log Parsing and SQL Injection Detection

The SIEM Analyzer accepts newline-delimited security events and parses basic key-value fields.

It identifies common SQL injection indicators, including UNION SELECT patterns, boolean conditions, SQL comments, time-delay functions and stacked statements.

This is a lightweight rule-based demonstration rather than a production SIEM or complete SQL parser.

### 2. Wireshark-Style PCAP Analysis

The PCAP Analyzer accepts classic `.pcap` files and extracts:

- Packet counts
- Source and destination IP addresses
- TCP and UDP protocols
- Source and destination ports
- Network conversations

Supported formats include classic PCAP with Ethernet, IPv4, TCP and UDP packet metadata.

It is not a complete replacement for Wireshark and does not support PCAPNG, IPv6, TCP stream reassembly or TLS decryption.

### 3. Base64 Decoding

The Base64 Decoder accepts encoded text and converts it into readable UTF-8 output.

It includes input validation and error handling for invalid encoded data.

### 4. SPF/DKIM/DMARC Email Header Triage

The Email Header Triage tool processes raw email headers and extracts reported authentication results.

It identifies:

- SPF results
- DKIM results
- DMARC results
- Authentication failures and suspicious indicators

The tool reads reported authentication results; it does not independently verify cryptographic signatures or DNS records.

### 5. MITRE ATT&CK Mapping

The MITRE ATT&CK module maps investigation evidence to relevant techniques and tactics.

Included technique mappings:

- T1091 — Replication Through Removable Media
- T1059.001 — PowerShell
- T1204.002 — Malicious File
- T1071.001 — Web Protocols
- T1486 — Data Encrypted for Impact
- T1190 — Exploit Public-Facing Application

Mappings are rule-based investigation hypotheses and require analyst validation.

### 6. HTML Canvas API Animation

The Canvas Lab uses the HTML Canvas 2D API to render an animated network telemetry visualization.

It demonstrates JavaScript-based drawing and animation using `requestAnimationFrame`, including pause and resume functionality.

## Included Sample Evidence

The project includes four sample files:

- `samples/security-events.log` — Sample security events for SIEM analysis.
- `samples/demo-traffic.pcap` — Synthetic network traffic for PCAP analysis.
- `samples/email-headers.txt` — Sample email authentication headers.
- `samples/base64-example.txt` — Sample Base64 input.

All sample evidence is fictional and intended for educational demonstrations.

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/rishima115/The-Breach.git
```

2. Navigate to the project directory:

```bash
cd The-Breach
```

3. Start a local development server:

```bash
python -m http.server 8000
```

4. Open the application:

```text
http://localhost:8000
```

The project uses HTML, CSS and vanilla JavaScript without requiring a build process or package installation.

**Demo Login:**
- Username: `investigator`
- Password: `breach`

## Interview Demonstration Sequence

1. **SIEM Analyzer:** Analyze sample security events and explain SQL injection indicators.
2. **PCAP Analyzer:** Upload the sample PCAP file and demonstrate packet metadata extraction.
3. **Base64 Decoder:** Decode the provided sample.
4. **Email Header Triage:** Analyze SPF, DKIM and DMARC authentication results.
5. **MITRE ATT&CK:** Explain the technique IDs and evidence behind the mappings.
6. **Canvas Lab:** Demonstrate the network animation and its pause/resume functionality.

## Security and Scope Notes

The Breach is a fictional cybersecurity investigation and portfolio simulation.

Evidence processing is designed for local browser-based demonstrations. The application does not perform live network capture, scan external systems, execute uploaded files or transmit investigation evidence to a server.

The security analysis modules are educational demonstrations and should not be treated as replacements for production security tools.

## Project Objective

The goal of The Breach is to combine cybersecurity concepts with interactive storytelling and portfolio presentation, creating an engaging experience where visitors investigate rather than simply read about the developer.

## Author

**Rishima Sharma**

B.Tech Computer Science Engineering

[GitHub](https://github.com/rishima115)

---

*The Breach is a fictional cybersecurity investigation and portfolio simulation. Its security scenarios are designed for educational and interactive demonstration purposes.*