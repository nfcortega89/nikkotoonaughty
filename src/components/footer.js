import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="col-md-3">
        <ul>
          <li>
            <a className="links-footer" href="">About</a>
          </li>
          <li>
            <a className="links-footer" href="">Facebook</a>
          </li>
          <li>
            <a className="links-footer" href="">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul>
          <li>
            <a className="links-footer" href="">Privacy Policy</a>
          </li>
          <li>
            <a className="links-footer" href="">Terms & Conditions</a>
          </li>
          <li>
            <a className="links-footer" href="">DMCA Notice</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <ul>
          <li>
            <a className="links-footer" href="">Arthur Longbottom</a>
          </li>
          <li>
            <a className="links-footer" href="">Georgia Siapno</a>
          </li>
          <li>
            <a className="links-footer" href="">Alison Kim</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
