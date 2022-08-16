import unattended from '../assets/unattended.png';
import attended from '../assets/attended.png';

function AutomationDetail() {
    return (
      <div className="App">
        {/**Image changes based if it is automationed or not */}
        <div className='automationPref divPadding'>
            <img src={attended} alt="status" style={{ maxHeight: '200px', paddingBottom:'50px', paddingRight:'10px' }}/>
            <h3>Automation Status</h3>
        </div>

        <div className='automationPref divPadding'>
            <h1>Automation Name</h1>
            <h2>Clients Name</h2>
            <h2>Hours Saved</h2>
        </div>

        <div className='automationPref divPadding'>
            <h1>Online</h1>
        </div>

        <div className='automationPref divPadding'>
            <h1>Customer Feedback</h1>
            <h1>Support Tickets</h1>
        </div>

        <div>
            {/**General Information */}
            <h1 className='divPadding2'>General Information</h1>
            <div className='automationPref divPadding2'>
                <h3 className='divPadding2'>{'Automation Id:'}</h3>

                <h3 className='divPadding2'>{'Process Owner(s)'}:</h3>

                <h3 className='divPadding2'>{'Process Custodian(s)'}</h3>

                <h3 className='divPadding2'>{'Run Frequency'}</h3>

                <h3 className='divPadding2'>{'Developer(s)'}</h3>

                <h3 className='divPadding2'>{'Project Description'}</h3>
            </div>

            <div className='automationPref divPadding2'>
                <h3 className='divPadding2'>{'3454563456456'}</h3>

                <h3 className='divPadding2'>{'3454563456456'}</h3>

                <h3 className='divPadding2'>{'3454563456456'}</h3>

                <h3 className='divPadding2'>{'3454563456456'}</h3>

                <h3 className='divPadding2'>{'3454563456456'}</h3>

                <h3 className='divPadding2'>{'3454563456456'}</h3>
            </div>

            <div className='automationPref divPadding2'>
                <div>
                    <h2>{'Eval -> Disc -> Dev -> Del'}</h2>
                </div>
                <div className='divPadding2'>
                    <h2>Suggested Action Carousel</h2>
                </div>
            </div>

            <div className='automationPref divPadding2'>
                <h1>Milestones</h1>
            </div>

        </div>

        
  
      </div>
    )
  }
  
  export default AutomationDetail;
  