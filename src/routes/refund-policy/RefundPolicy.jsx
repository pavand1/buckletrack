import React from 'react'
import CpRefundPolicy from '../../components/cp-refund-policy/CpRefundPolicy'
import CpRefundPolicyBanner from '../../components/common/cp-banner/CpRefundPolicyBanner'

const RefundPolicy = () => {
  return (
    <>
        <CpRefundPolicyBanner /> 
        <CpRefundPolicy />
    </>
  )
}

export default RefundPolicy
