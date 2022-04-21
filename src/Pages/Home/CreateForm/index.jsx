import "./style.css";
import PageTilte from "../../../Components/Atoms/title/index";
import NewHouse from "../../../utils/images/new-house.jpg";

function CreateForm() {
  return (
    <>
      <PageTilte title={"add offer"} />
      <div className="discount2">
        <div className="image">
          <div className="content">
            <p>Add your new offer to show other users</p>
            <img src={NewHouse} alt="" />
          </div>
        </div>

        <div className="form">
          <div className="content">
            <form action="post">
              <input
                className="input"
                type="text"
                placeholder="title"
                name="title"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="price"
                name="price"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="floor"
                name="floor"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="directione"
                name="directione"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="city"
                name="city"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="intermediary"
                name="intermediary"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="offer type"
                name="offer_type"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="region"
                name="region"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="directione"
                name="directione"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="cladding status"
                name="cladding_status"
                required
              />

              <input
                className="input"
                type="text"
                placeholder="eara"
                name="home_space"
                required
              />
              <input
                className="input"
                type="text"
                placeholder="price"
                name="price"
                required
              />
              <input
                className="input"
                type="number"
                placeholder="number of entrances"
                name="number_of_entrances"
                required
              />

              <input
                className="input"
                type="number"
                placeholder="number of rooms"
                name="number_of_rooms"
                required
              />

              <textarea
                className="input"
                placeholder="description"
                name="description"
              ></textarea>

              <textarea
                className="input"
                placeholder="address details"
                name="address_details"
              ></textarea>
              <input
                type="file"
                id="myFile"
                name="image"
                placeholder="chose image"
                style={{ margin: "15px 0" }}
              ></input>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateForm;
