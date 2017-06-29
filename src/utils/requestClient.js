import request from 'superagent'
import { merge } from 'ramda'
import { constructUrlGetParameters } from './helpers'

const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
}

export class RequestClientClass {

  constructor(baseUrl, requestClient = request) {
    this.baseUrl = baseUrl
    this.requestClient = requestClient
    this.headers = defaultOptions.headers
    this.payload = ''
    this.uri = ''
    this.queryUrl = {}
  }

  /**
   * Trim up extra space, and leading slash
   * @param string
   */
  static clean(string) {
    if (typeof string === 'string') {
      return string.trim().replace(/\/$/, '')
    }
    return string
  }

  setUri(uri) {
    this. uri = uri
    return this
  }

  setHeaders(headers) {
    this.headers = merge(this.headers, headers)
    return this
  }

  setPayload(payload) {
    this.payload = payload
    return this
  }

  /**
   * Set Get Parameter
   * @param {Object} queryUrl
   * @returns {HttpClient}
   */
  setQueryParameter(queryUrl) {
    if (typeof queryUrl === 'object') {
      Object.keys(queryUrl).forEach(key => {
        this.setQueryParameterUrl(key, queryUrl[key])
      })
    }
    return this
  }
  setQueryParameterUrl(key, value) {
    this.queryUrl[key] = value
    return this
  }

  constructFQDN() {
    const uri = [ this.baseUrl, this.uri ].map(RequestClientClass.clean).filter(Boolean).join('/')

    return constructUrlGetParameters(uri, this.queryUrl)
  }

  doMethod(method = 'get') {
    const endpoint = this.constructFQDN()

    const request = (() => {
      const request = this.requestClient[method](endpoint)
      if(method === 'post' || method === 'put') {
        request.send(this.payload)
      }
      return request
    })()

    return new Promise((resolve, reject) => {
      request
        .set(this.headers)
        .end((err, res) => {
          if(err) {
            reject(err || res)
          }else {
            resolve(res.body)
          }
        })
    })
  }

  doPost() {
    return this.doMethod('post')
  }

  doPut() {
    return this.doMethod('put')
  }

  doGet() {
    return this.doMethod('get')
  }

}
