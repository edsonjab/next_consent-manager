import React from 'react'

import { ConsentManager, openConsentManager } from '@segment/consent-manager'

const bannerContent = (
  <span>
    We use cookies (and other similar technologies) to collect data to improve your experience on
    our site.
    <br />
    By using our website, you’re agreeing to the collection of data as described in our{' '}
    <a
      href="https://segment.com/docs/legal/website-data-collection-policy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Website Data Collection Policy
    </a>
    .
  </span>
)
const preferencesDialogTitle = 'Website Data Collection Preferences'
const preferencesDialogContent = (
  <div>
    <p>
      Segment uses data collected by cookies and JavaScript libraries to improve your browsing
      experience, analyze site traffic, deliver personalized advertisements, and increase the
      overall performance of our site.
    </p>
    <p>
      By using our website, you’re agreeing to our{' '}
      <a
        href="https://segment.com/docs/legal/website-data-collection-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website Data Collection Policy
      </a>
      .
    </p>
    <p>
      The table below outlines how we use this data by category. To opt out of a category of data
      collection, select “No” and save your preferences.
    </p>
  </div>
)
const cancelDialogTitle = 'Are you sure you want to cancel?'
const cancelDialogContent = (
  <div>
    Your preferences have not been saved. By continuing to use our website, you’re agreeing to our{' '}
    <a
      href="https://segment.com/docs/legal/website-data-collection-policy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Website Data Collection Policy
    </a>
    .
  </div>
)

const Banner = () => {
  return (
    <div>
      <ConsentManager
        writeKey="YOUR_KEY"
        otherWriteKeys={['OTHER_KEYS']}
        shouldRequireConsent={() => true}
        bannerContent={bannerContent}
        bannerSubContent={"Preferences"}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
        implyConsentOnInteraction={true}
        bannerAsModal={false}
        bannerActionsBlock={true}
      />
        <button type="button" onClick={openConsentManager}>Data Collection and Cookie Preferences</button>
    </div>
  )
}

export default Banner;