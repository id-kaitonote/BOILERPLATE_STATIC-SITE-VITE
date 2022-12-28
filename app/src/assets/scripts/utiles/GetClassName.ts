/**
 * class名の取得。
 * @param {HTMLElement} target class名を取得するDOM要素です。
 * @return {string} class名を返します。
 */

export default (target: HTMLElement) => String(target.classList).split(' ')
