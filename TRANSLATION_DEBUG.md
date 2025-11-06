# Translation Debugging Guide

## How to Test if Translation is Working

### Step 1: Check if Google Translate Script Loaded
1. Open your website in the browser
2. Open Developer Console (F12)
3. Type: `document.querySelector('.goog-te-combo')`
4. If it returns an element, Google Translate loaded successfully ✅
5. If it returns `null`, the script didn't load ❌

### Step 2: Check Console Logs
Look for these messages in the console:
- "Google Translate found, applying language: hi" - Translation triggered ✅
- "Google Translate not loaded after 10 seconds" - Script failed to load ❌

### Step 3: Manual Translation Test
In the browser console, try:
```javascript
// Check if Google Translate is available
console.log(window.google);

// Find the select element
const select = document.querySelector('.goog-te-combo');
console.log('Select element:', select);

// Try to change language manually
if (select) {
  select.value = 'hi';
  select.dispatchEvent(new Event('change'));
}
```

### Step 4: Check localStorage
```javascript
// Check saved language preference
console.log(localStorage.getItem('preferredLanguage'));

// Set it manually
localStorage.setItem('preferredLanguage', 'hi');

// Clear it
localStorage.removeItem('preferredLanguage');
```

## Common Issues and Solutions

### Issue 1: Google Translate Script Not Loading
**Symptoms:** No translation happens, console shows errors

**Solutions:**
1. Check internet connection
2. Check if browser blocks Google scripts (ad blockers, privacy extensions)
3. Try in incognito/private mode
4. Check browser console for CORS or CSP errors

### Issue 2: Translation Happens But Reverts
**Symptoms:** Page translates briefly then goes back to English

**Solutions:**
1. Check if page is reloading unexpectedly
2. Verify localStorage is working
3. Check for JavaScript errors in console

### Issue 3: Dropdown Shows But Nothing Happens
**Symptoms:** Can click dropdown but no translation

**Solutions:**
1. Wait 2-3 seconds after page load before clicking
2. Check console for "Google Translate found" message
3. Try clicking twice
4. Refresh page and try again

### Issue 4: Layout Breaks After Translation
**Symptoms:** Page looks broken after translation

**Solutions:**
1. Check CSS for fixed widths
2. Ensure responsive design
3. Test with shorter Hindi text

## Testing Checklist

- [ ] Google Translate script loads (check console)
- [ ] Dropdown appears in navbar
- [ ] Can click and see language options
- [ ] Loading popup appears when selecting Hindi
- [ ] Success popup appears after 2 seconds
- [ ] Page content translates to Hindi
- [ ] Language persists after page refresh
- [ ] Can switch back to English
- [ ] No console errors
- [ ] Works on mobile devices

## Browser-Specific Issues

### Chrome/Edge
- Usually works best
- Check if "Translate" feature is enabled in settings

### Firefox
- May need to allow third-party cookies
- Check privacy settings

### Safari
- May block Google scripts by default
- Check "Prevent cross-site tracking" setting

### Mobile Browsers
- May have stricter security
- Test in both Chrome and Safari mobile

## Advanced Debugging

### Enable Verbose Logging
Add this to your browser console:
```javascript
// Monitor all Google Translate activity
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains('translated-ltr')) {
      console.log('Translation applied!');
    }
  });
});

observer.observe(document.body, {
  attributes: true,
  attributeFilter: ['class']
});
```

### Check Translation Status
```javascript
// Check if page is currently translated
console.log('Body classes:', document.body.className);
console.log('HTML lang:', document.documentElement.lang);

// Check for Google Translate elements
console.log('Translate elements:', document.querySelectorAll('[class*="goog"]'));
```

## Still Not Working?

If translation still doesn't work after trying all the above:

1. **Clear browser cache completely**
2. **Disable all browser extensions**
3. **Try a different browser**
4. **Check if Google Translate service is down** (visit translate.google.com)
5. **Verify your internet connection allows Google services**

## Alternative: Test with Simple HTML

Create a test file `test-translate.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Translation Test</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a test page for Google Translate.</p>
  
  <div id="google_translate_element"></div>
  
  <script>
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi'
      }, 'google_translate_element');
    }
  </script>
  <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>
```

If this works, the issue is with the React integration. If this doesn't work, the issue is with Google Translate service or browser settings.
