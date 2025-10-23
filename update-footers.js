const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/auth/sign-in/index.tsx',
  'src/pages/auth/pass-recovery/index.tsx',
  'src/pages/auth/sign-up/index.tsx',
  'src/pages/auth/sign-in-up/index.tsx',
  'src/pages/(pages)/pricing/components/Footer.tsx',
  'src/pages/(pages)/services/v2/components/Footer.tsx',
  'src/pages/(pages)/services/v3/components/Footer.tsx',
  'src/pages/(pages)/services/v1/components/Footer.tsx',
  'src/pages/(pages)/portfolio/list-v2/components/Footer.tsx',
  'src/pages/(pages)/portfolio/single-v2/components/Footer.tsx',
  'src/pages/(pages)/portfolio/grid-v2/components/Footer.tsx',
  'src/pages/(pages)/portfolio/list-v1/components/Footer.tsx',
  'src/pages/(pages)/portfolio/grid-v1/components/Footer.tsx',
  'src/pages/(pages)/about/product/components/Footer.tsx',
  'src/pages/(pages)/portfolio/single-v1/components/Footer.tsx',
  'src/pages/(pages)/about/agency/components/Footer.tsx',
  'src/pages/(pages)/contacts/v1/components/Footer.tsx',
  'src/pages/(pages)/contacts/v3/components/Footer.tsx',
  'src/pages/(pages)/shop/checkout/index.tsx',
  'src/pages/(pages)/contacts/v2/components/Footer.tsx'
];

files.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Pattern to match the link with all its attributes and the text "Opsteam.dev"
      const linkPattern = /<Link[^>]*to=["']https?:\/\/stackbros\.in[\/"'][^>]*>\s*Opsteam\.dev\s*<\/Link>/g;
      
      // Replace the link with just the text "Opsteam.dev" with appropriate styling
      const newContent = content.replace(linkPattern, match => {
        // Preserve the existing classes from the Link component
        const classMatch = match.match(/class="([^"]*)"/);
        // Keep fw-normal and ms-1 classes, remove nav-link and other link-specific classes
        const preservedClasses = classes.split(' ')
          .filter(cls => ['fw-normal', 'ms-1', 'd-inline', 'd-inline-block'].includes(cls))
          .join(' ');
          
        return `<span class="${preservedClasses}">Opsteam.dev</span>`;
      });
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`✅ Updated: ${filePath}`);
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n✅ All footer links have been updated!');
