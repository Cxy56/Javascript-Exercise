
// !!rem技术方案
function setRem () {
  const designWidth = 750
  const maxClientWidth = 1024
  let docEl = document.documentElement
  rem = Math.min(docEl.clientWidth, maxClientWidth) / designWidth * 100

  // dpr >= 2 时候, 会有0.5px的问题 var dpr = win.devicePixelRatio || 1; 
  const rect = docEl.getBoundingClientRect()
  const width = rect.width ? rect.width : 0
  const viewportWidth = width === docEl.clientWidth ? 'device-width' : width
  let metaEl = doc.querySelector('meta[name="viewport"]')
  if(!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaContent = `width=${viewportWidth}, ${viewportSettings}`
  }

   /* 针对系统自定义字号导致页面错乱问题修复 */
  let styles = window.getComputedStyle(document.documentElement)
  fontSize = parseFloat(styles.fontSize)  // rem单位进行四舍五入保留4位小数再比较，因为系统仅保留4位

  if(fontSize !== Math.round(rem * 10000)/ 10000){
    rem = (rem / fontSize) * rem  // 根据实际fontSize尺寸得出缩放比例，计算出页面需要的fontSize
  }

  docEl.style.fontSize = `${rem}px`
}

setRem()
// 监听窗口的变化
window.addEventListener('resize', setRem)