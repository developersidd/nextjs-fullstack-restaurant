"use client";
import { menuItems } from "@/assets/data/menuData";
import Menu from "@/components/Menu/Menu";
import HighlightedMenuItem from "@/components/MenuItem/HighlightedMenuItem";
import MenuItem from "@/components/MenuItem/MenuItem";
import MenuToolTip from "@/ui/MenuToolTip";

const AllMenus = () => {
  return (
    <>
      {/*  Menu One */}
      <Menu
        title="The Perfect Patty"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src="/../../assets/images/menu-1.jpg"

      >
        {/* Here is all menu items */}
        {
          menuItems[0].map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 0 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place="right"
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place="right"

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          )

          )
        }
      </Menu>
      {/*  Menu Two */}
      <Menu
        imgFirst={false}
        title="Meet your meat"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src="/../../assets/images/menu-2.jpg"

      >
        {/* Here is all menu items */}

        {
          menuItems[1].map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 2 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place="left"
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place="left"

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          ))
        }
      </Menu>

      {/*  Menu Three */}
      <Menu
        title="Delight in every bite"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src="/../../assets/images/menu-3.jpg"

      >
        {/* Here is all menu items */}

        {
          menuItems[2].map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 3 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place="right"
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place="right"

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          ))
        }
      </Menu>

    </>
  )
}

export default AllMenus