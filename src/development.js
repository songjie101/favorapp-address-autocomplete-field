import React from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from 'react-async-script-loader'
import GOOGLE_MAPS_KEY from './google-maps-key'
import { Select } from 'antd'
import {
  PlacesAutocompleteAdvanced,
  PlacesAutocompleteSimple,
  FavorAppsButton,
  BUTTON_TYPE,
  FavorAppsAlert,
  ALERT_TYPE,
  FavorAppsCard,
  CARD_TYPE,
  FavorAppsFileUpload,
  FavorAppsIconButton,
  ICON_BUTTON_TYPE,
  FavorAppsInput,
  FavorAppsInputMask,
  MASK,
  FavorAppsLabel,
  FavorAppsSelect,
  FavorAppsTable,
  FavorAppsTag,
  FavorAppsTextArea,
  FavorAppsHarveyBall,
  BALL_TYPE,
  FavorAppsCurrencyInput,
  FavorAppsNumberFormat,
} from './index'

const TestSimpleInput = () => (
  <div>
    <br />
    Simple field:
    <PlacesAutocompleteSimple
      onChange={(address) => console.log('Simple change', address)}
    />
    <br />
  </div>
)

const TestAdvancedInput = () => (
  <div>
    <br />
    Advanced field:
    <PlacesAutocompleteAdvanced
      onChange={(addressComponents) => console.log('Advanced change', addressComponents)}
    />
    <br />
  </div>
)

const TestFavorAppsButton = () => (
  <div>
    <br />
    FavorApps Button:
    <FavorAppsButton block noShadow type={BUTTON_TYPE.BLUE}>
      Request funds
    </FavorAppsButton>
    <br />
  </div>
)

const TestFavorAppsCard = () => (
  <div>
    <br />
    FavorApps Card:
    <FavorAppsCard type={CARD_TYPE.PRIMARY}>
      Card
    </FavorAppsCard>
    <br />
  </div>
)

const TestFavorAppsBall = () => (
  <div>
    <br />
    FavorApps Harvey Ball:
    <FavorAppsHarveyBall type={BALL_TYPE.INACTIVE}>
      Inactive
    </FavorAppsHarveyBall>
    <br />
  </div>
)

const TestFavorAppsFileUpload = () => (
  <div>
    <br />
    FavorApps File Upload:
    <FavorAppsFileUpload onDropFiles={() => { }} textInfo="Drop Files here" />
    <br />
  </div>
)

const TestFavorAppsIconButton = () => (
  <div>
    <br />
    FavorApps Icon Button:
    <FavorAppsIconButton type={ICON_BUTTON_TYPE.PRIMARY}>
      Link
    </FavorAppsIconButton>
    <br />
  </div>
)

const TestFavorAppsInput = () => (
  <div>
    <br />
    FavorApps Input:
    <FavorAppsInput value="Testing value" />
    <br />
  </div>
)

const TestFavorAppsInputMask = () => (
  <div>
    <br />
    FavorApps Input Mask:
    <FavorAppsInputMask mask={MASK.US_PHONE} />
    <br />
  </div>
)

const TestFavorAppsLabel = () => (
  <div>
    <br />
    FavorApps Label:
    <FavorAppsLabel label="First name" />
    <br />
  </div>
)

const TestFavorAppsSelect = () => (
  <div>
    <br />
    FavorApps Select:
    <FavorAppsSelect placeholder="Testing" style={{ width: '100%' }} value="1">
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </FavorAppsSelect>
    <br />
  </div>
)

const TestFavorAppsTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      render: (text, office) => <Link to={`/offices/${office.id}`}>{text}</Link>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Membership',
      dataIndex: 'membership',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ]

  return (
    <div>
      <br />
      FavorApps Table:
      <FavorAppsTable columns={columns} />
      <br />
    </div>
  )
}

const TestFavorAppsTag = () => (
  <div>
    <br />
    FavorApps Tag:
    <FavorAppsTag />
    <br />
  </div>
)

const TestFavorAppsTextArea = () => (
  <div>
    <br />
    FavorApps Text Area:
    <FavorAppsTextArea />
    <br />
  </div>
)

const TestFavorAppsCurrencyInput = () => (
  <div>
    <br />
    FavorApps Currency Input:
    <FavorAppsCurrencyInput />
    <br />
  </div>
)

const TestFavorAppsNumberFormat = () => (
  <div>
    <br />
    FavorApps Number Format:
    <FavorAppsNumberFormat
      number={10}
      decimals={2}
      format="currency"
    />
  </div>
)

const Test = ({ isScriptLoadSucceed }) => (
  <>
    {isScriptLoadSucceed &&
      <FavorAppsAlert type={ALERT_TYPE.SUCCESS}>
        <h5 className="d-inline font-weight-bold mr-3">{'Title Alert'}</h5>
        {'Alert example'}
      </FavorAppsAlert>
    }
    {!isScriptLoadSucceed && <div>There was an error loading Google maps</div>}
    {isScriptLoadSucceed && <TestAdvancedInput />}
    {isScriptLoadSucceed && <TestSimpleInput />}
    {isScriptLoadSucceed && <TestFavorAppsButton />}
    {isScriptLoadSucceed && <TestFavorAppsCard />}
    {isScriptLoadSucceed && <TestFavorAppsFileUpload />}
    {isScriptLoadSucceed && <TestFavorAppsIconButton />}
    {isScriptLoadSucceed && <TestFavorAppsInput />}
    {isScriptLoadSucceed && <TestFavorAppsInputMask />}
    {isScriptLoadSucceed && <TestFavorAppsLabel />}
    {isScriptLoadSucceed && <TestFavorAppsSelect />}
    {isScriptLoadSucceed && <TestFavorAppsTable />}
    {isScriptLoadSucceed && <TestFavorAppsTag />}
    {isScriptLoadSucceed && <TestFavorAppsTextArea />}
    {isScriptLoadSucceed && <TestFavorAppsBall />}
    {isScriptLoadSucceed && <TestFavorAppsCurrencyInput />}
    {isScriptLoadSucceed && <TestFavorAppsNumberFormat />}
  </>
)

const TestWithMaps = scriptLoader(
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places`
)(Test)

ReactDOM.render(<TestWithMaps />, document.getElementById('app'))
