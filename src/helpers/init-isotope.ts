import imagesLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'

export const initIsotope = () => {
  const grids = document.querySelectorAll('.masonry-grid')

  grids.forEach((grid) => {
    if (grid instanceof HTMLElement) {
      const gridData = grid.getAttribute('data-isotope')
      if (gridData) {
        const gridOptions = JSON.parse(gridData)
        const iso = new Isotope(grid, {
          itemSelector: '.masonry-grid-item',
          layoutMode: gridOptions.layoutMode || 'masonry',
          transitionDuration: '0.7s',
        })

        imagesLoaded(grid).on('progress', () => {
          iso.layout()
        })

        const filterMenu = document.querySelector('.masonry-filters')
        if (filterMenu) {
          const menuItems = filterMenu.querySelectorAll('a[data-filter]')
          menuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', (e) => {
              e.preventDefault()
              const filterValue = menuItem.getAttribute('data-filter') || '*'
              iso.arrange({ filter: filterValue })
              menuItems.forEach((control) => control.classList.remove('active'))
              menuItem.classList.add('active')
            })
          })
        }
      }
    }
  })
}
