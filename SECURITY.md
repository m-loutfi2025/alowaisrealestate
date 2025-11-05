# Security Policy

## Supported Versions

We actively support the following versions of the Al Owais Real Estate website:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our website seriously. If you discover a security vulnerability, please follow these steps:

### 🔒 Private Disclosure

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security issues privately to:
- **Email**: security@alowaisrealestate.com
- **Phone**: +971 4 266 4999 (for urgent matters)

### 📝 What to Include

When reporting a vulnerability, please include:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** assessment
4. **Suggested fix** (if you have one)
5. **Your contact information** for follow-up

### ⏱️ Response Timeline

- **Acknowledgment**: Within 24 hours
- **Initial Assessment**: Within 72 hours
- **Status Updates**: Weekly until resolved
- **Resolution**: Varies by severity (see below)

### 🚨 Severity Levels

#### Critical (24-48 hours)
- Remote code execution
- SQL injection
- Authentication bypass
- Data breach potential

#### High (1 week)
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Privilege escalation
- Sensitive data exposure

#### Medium (2 weeks)
- Information disclosure
- Denial of service
- Security misconfigurations

#### Low (1 month)
- Minor information leaks
- Non-exploitable vulnerabilities
- Security best practice improvements

## 🛡️ Security Measures

### Current Protections

#### Frontend Security
- **Content Security Policy** (CSP) headers
- **XSS Protection** via React's built-in sanitization
- **HTTPS Enforcement** for all communications
- **Secure Headers** (HSTS, X-Frame-Options, etc.)

#### Data Protection
- **No sensitive data** stored in frontend code
- **Environment variables** for API keys
- **Input validation** on all forms
- **GDPR compliance** for user data

#### Infrastructure Security
- **Regular dependency updates**
- **Automated security scanning**
- **Secure hosting** with reputable providers
- **Regular backups** and disaster recovery

### 🔍 Security Audits

We conduct regular security assessments:
- **Monthly** dependency vulnerability scans
- **Quarterly** code security reviews
- **Annual** third-party security audits

### 📋 Security Checklist

#### Development
- [ ] All dependencies are up to date
- [ ] No hardcoded secrets in code
- [ ] Input validation on all forms
- [ ] Proper error handling (no sensitive info leaks)
- [ ] HTTPS enforced everywhere

#### Deployment
- [ ] Environment variables properly configured
- [ ] Security headers implemented
- [ ] CDN security settings configured
- [ ] Monitoring and alerting set up
- [ ] Backup and recovery procedures tested

## 🚫 Out of Scope

The following are **NOT** considered security vulnerabilities:

### Expected Behavior
- **Public information** displayed on the website
- **Contact form** submissions (by design)
- **Language switching** functionality
- **Public project information**

### Third-party Services
- **Google Maps** integration issues
- **Font loading** from Google Fonts
- **CDN** service interruptions
- **Social media** platform issues

### Browser-specific Issues
- **Older browser** compatibility
- **Browser extension** conflicts
- **User-specific** configuration issues

## 🏆 Recognition

We appreciate security researchers who help keep our website secure. With your permission, we'll acknowledge your contribution:

### Hall of Fame
*No security issues reported yet - be the first!*

### Responsible Disclosure
We follow responsible disclosure practices:
1. **Private reporting** to us first
2. **Coordinated disclosure** timeline
3. **Public acknowledgment** (with your consent)
4. **Credit** in our security advisories

## 📞 Emergency Contact

For **urgent security matters** requiring immediate attention:

- **24/7 Emergency Line**: +971 4 266 4999
- **Emergency Email**: security@alowaisrealestate.com
- **Backup Contact**: info@alowaisrealestate.com

## 🔄 Policy Updates

This security policy is reviewed and updated:
- **Quarterly** for regular updates
- **Immediately** after security incidents
- **Annually** for comprehensive review

Last updated: November 5, 2025

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [Vite Security Guide](https://vitejs.dev/guide/env-and-mode.html#env-files)

---

**Thank you for helping keep Al Owais Real Estate website secure!** 🛡️
