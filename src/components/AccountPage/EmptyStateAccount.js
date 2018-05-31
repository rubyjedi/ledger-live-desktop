// @flow

import React, { PureComponent } from 'react'
import { i } from 'helpers/staticPath'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { translate } from 'react-i18next'

import { openModal } from 'reducers/modals'
import type { T } from 'types/common'
import type { Account } from '@ledgerhq/live-common/lib/types'

import { MODAL_RECEIVE } from 'config/constants'

import Box from 'components/base/Box'
import Button from 'components/base/Button'
import { Title, Description } from 'components/DashboardPage/EmptyState'
import IconReceive from 'icons/Receive'

const mapDispatchToProps = {
  openModal,
}

type Props = {
  t: T,
  account: Account,
  openModal: Function,
}

class EmptyStateAccount extends PureComponent<Props, *> {
  render() {
    const { t, account, openModal } = this.props

    return (
      <Box mt={7} alignItems="center">
        <img
          alt="emptyState Dashboard logo"
          src={i('logos/emptyStateAccount.png')}
          width="400"
          height="89"
        />
        <Box mt={5} alignItems="center">
          <Title>{t('account:emptyState.title')}</Title>
          <Description>{t('account:emptyState.desc')}</Description>
          <Button mt={3} padded primary onClick={() => openModal(MODAL_RECEIVE, { account })}>
            <Box horizontal flow={1} alignItems="center">
              <IconReceive size={12} />
              <Box>{t('account:emptyState.buttons.receiveFunds')}</Box>
            </Box>
          </Button>
        </Box>
      </Box>
    )
  }
}

export default compose(connect(null, mapDispatchToProps), translate())(EmptyStateAccount)
