import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gameSelectedOptions } from "../../redux/actions/gameActions";

const StrikeoutScreen = () => {
  const dispatch = useDispatch();
  // const [categoryValue, setCategoryValue] = useState("");
  // const [difficultyValue, setDifficultyValue] = useState("easy");
  // const [amountValue, setAmountValue] = useState("5");

  // const handleCategoryValueChange = (e) => {
  //   console.log(e.target.value);
  //   setCategoryValue(e.target.value);
  // };

  // const handleDifficultyValueChange = (e) => {
  //   console.log(e.target.value);
  //   setDifficultyValue(e.target.value);
  // };

  // const handleAmountValueChange = (e) => {
  //   console.log(e.target.value);
  //   setAmountValue(e.target.value);
  // };

  const handleSelectedOptions = () => {
    dispatch(gameSelectedOptions("", "all", "50", "strikeout", true));
  };

  return (
    <>
      <h1>Strikeout Screen</h1>

      {/* <div className='row mt-5'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Select Category
              </label>
            </div>
            <select
              value={categoryValue}
              className='custom-select'
              id='inputGroupSelect01'
              onChange={handleCategoryValueChange}>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Select Difficulty
              </label>
            </div>
            <select
              value={difficultyValue}
              className='custom-select'
              id='inputGroupSelect01'
              onChange={handleDifficultyValueChange}>
              <option value='easy'>Easy</option>
              <option value='medium'>Normal</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <div className='row'> */}

      {/* <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Max Questions
              </label>
            </div>
            <select
              value={amountValue}
              className='custom-select'
              id='inputGroupSelect01'
              onChange={handleAmountValueChange}>
              <option value='5'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
            </select>
          </div>
        </div>
        <div className='col-sm-4'></div> */}
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-10 col-lg-8'>
          <div className='jumbotron'>
            <div className='container'>
              <h3 className='display-6'>How to Play</h3>
              <p className='lead text-justify'>
                In Strikeout mode, answer as many questions as you can before
                making 3 errors (outs). The maximum number of questions to
                answer is 50, will you be able to reach the end? The questions
                have different difficulties and a value according to the
                following table:
              </p>
              <p>
                <span className='badge badge-success mr-3'>EASY</span> 1 Point
              </p>
              <p>
                <span className='badge badge-warning mr-3'>NORMAL</span>3 Points
              </p>
              <p>
                <span className='badge badge-danger mr-3'>HARD</span>5 Points
              </p>

              <p className='lead mt-5'>Good Luck!</p>

              <Link
                to='strikeout/game'
                className='btn btn-block btn-primary'
                onClick={handleSelectedOptions}>
                Start Game
              </Link>

              <Link to='/' className='btn btn-block btn-secondary'>
                Main Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrikeoutScreen;
