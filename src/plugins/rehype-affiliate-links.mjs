import { visit } from 'unist-util-visit';

export function rehypeAffiliateLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties?.href) {
        const href = String(node.properties.href);
        if (
          href.includes('amazon.com') ||
          href.includes('tag=toolsradar05-20') ||
          href.includes('amzn.to') ||
          href.includes('awin1.com') ||
          href.includes('awin.com/cread') ||
          href.includes('siteground.com/index.htm?afcode') ||
          (href.includes('kinsta.com') && href.includes('kaid=')) ||
          href.includes('cloudways.com') && href.includes('id=') ||
          href.includes('bluehost.sjv.io') ||
          href.includes('chewy.com') ||
          href.includes('petco.com') ||
          href.includes('anrdoezrs.net') ||
          href.includes('dpbolvw.net') ||
          href.includes('jdoqocy.com') ||
          href.includes('tkqlhce.com') ||
          href.includes('kqzyfj.com') ||
          href.includes('ftjcfx.com') ||
          href.includes('lduhtrp.net') ||
          href.includes('tqlkg.com') ||
          href.includes('awltovhc.com')
        ) {
          node.properties.rel = 'nofollow sponsored external';
          node.properties.target = '_blank';
          // Add a class for styling
          const existing = node.properties.className || [];
          node.properties.className = [...(Array.isArray(existing) ? existing : [existing]), 'affiliate-link'];
        }
      }
    });
  };
}
