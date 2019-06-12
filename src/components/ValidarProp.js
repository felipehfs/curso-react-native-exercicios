import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const validarProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>

validarProps.defaultProps = {
    label: 'Ano: '
}

validarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default validarProps