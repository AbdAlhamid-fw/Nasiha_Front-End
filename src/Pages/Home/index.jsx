import "./style.css";
import landingImage from "../../utils/images/Landing.webp";
import house from "../../utils/images/house.png";
import sell_house from "../../utils/images/sell_house.jpg";
import PageTilte from '../../Components/Atoms/title/index' 
function Home() {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Nasiha World</h1>
            <p>
              We are a company that sells homes, we seek to secure your order
              with the best specifications, at the best competitive prices, and
              in the best possible ways We have construction projects in all of
              the Syrian governorate
            </p>
          </div>
          <div className="image">
            <img src={landingImage} alt="" />
          </div>
        </div>
      </div>

      <div className="houses" id="Real Estate">
        <PageTilte title={"Latest Offers"} />
        <div className="container">
          <div className="house-details">
            <h3>شقة للبيع في دمشق</h3>
            <p className="text">
              دمشق / كفر سوسة تنظيم / <span>بجانب جامع علي دقر</span>
            </p>

            <div className="info">
              <div>شقة سكنية للبيع</div>
              <div>405.0 مليون</div>
              <div> 75 m²</div>
            </div>
            <div className="information">
              <div>نوع العرض</div>
              <div>السعر</div>
              <div>المساحة</div>
            </div>

            <div className="outside">
              <div className="behold"> غرف: 2 </div>
              <div className="behold">مداخل: 1 </div>
              <div className="behold">مكسي</div>
            </div>

            <h4>دون وسيط</h4>
            <p>منذ حوالي شهران</p>
          </div>

          <div className="box-img">
            <div className="image">
              <img src={house} alt="no image" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="house-details">
            <h3>شقة للبيع في ريف دمش</h3>
            <p className="text">
              ريف دمشق / عين ترما / <span>بجانب المغفر </span>
            </p>

            <div className="info">
              <div>شقة سكنية للبيع</div>
              <div>300.0 مليون</div>
              <div> 300 m²</div>
            </div>
            <div className="information">
              <div>نوع العرض</div>
              <div>السعر</div>
              <div>المساحة</div>
            </div>

            <div className="outside">
              <div className="behold"> غرف: 8 </div>
              <div className="behold">مداخل: 1 </div>
              <div className="behold">مكسي</div>
            </div>

            <h4>دون وسيط</h4>
            <p>منذ حوالي يوم</p>
          </div>

          <div className="box-img">
            <div className="image">
              <img src={sell_house} alt="no image" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="house-details">
            <h3>شقة للبيع في دمشق</h3>
            <p className="text">
              برزة / <span> خلف الملعب </span>
            </p>

            <div className="info">
              <div>شقة سكنية للبيع</div>
              <div>150.0 مليون</div>
              <div> 50 m²</div>
            </div>
            <div className="information">
              <div>نوع العرض</div>
              <div>السعر</div>
              <div>المساحة</div>
            </div>

            <div className="outside">
              <div className="behold"> غرف: 1 </div>
              <div className="behold">مداخل: 1 </div>
              <div className="behold">مكسي</div>
            </div>

            <h4>مع وسيط</h4>
            <p>منذ حوالي يومين</p>
          </div>

          <div className="box-img">
            <div className="image">
              <img src={house} alt="no image" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="house-details">
            <h3>شقة للبيع في دمشق</h3>
            <p className="text">
              دمشق / ميدان <span>جابب المؤسسة</span>
            </p>

            <div className="info">
              <div>شقة سكنية للبيع</div>
              <div>600.0 مليون</div>
              <div> 200 m²</div>
            </div>
            <div className="information">
              <div>نوع العرض</div>
              <div>السعر</div>
              <div>المساحة</div>
            </div>

            <div className="outside">
              <div className="behold"> غرف: 5 </div>
              <div className="behold">مداخل: 1 </div>
              <div className="behold">مكسي</div>
            </div>

            <h4> وسيط</h4>
            <p>منذ حوالي شهر </p>
          </div>

          <div className="box-img">
            <div className="image">
              <img src={sell_house} alt="no image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
