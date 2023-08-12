import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'
import { FooterWrapper } from '@/components/app-footer/style'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.name}>
                <div className="name">{item.name}</div>
                <div className="list">
                  {item.list.map((iten) => {
                    return (
                      <div className="iten" key={iten}>
                        {iten}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="statement">Airbnb Copyright</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
