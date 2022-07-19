// Import stylesheets
import './style.css';

// Import LIFF
import liff from '@line/liff';

// Import jquery
import $ from 'jquery';

import app_config from './assets/app_config.json';

// const form_body_html =
//   '<div class="form-title">กรุณากรอกรายชื่อเพื่อนที่ต้องการแนะนำ</div><div class="form-subtitle">กรุณากรอกข้อมูลในช่องที่มี * ทุกช่อง</div><form id="CampaignReferral" class="form-body needs-validation" novalidate><div class="mb-2"><label class="form-label subform-label">ผู้แนะนำ</label><label class="form-label">ชื่อ - นามสกุล *</label><div class="input-group"><input id="FirstnameInput" type="text" class="form-control form-control-sm" /><input id="SurnameInput" type="text" class="form-control form-control-sm" /></div></div><div class="mb-2"><label class="form-label">ชื่อเล่น *</label><input id="NicknameInput" type="text" class="form-control form-control-sm" /></div><div class="mb-2"><ul><li><label class="form-label subform-label">เพื่อนคนที่ 1</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname1Input" type="text" class="form-control form-control-sm" /><label class="form-label subform-label">ชื่อเล่น *&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;เบอร์โทร (10 หลัก) *</label><div class="input-group"><input id="Nickname1Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone1Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label">เพื่อนคนที่ 2</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname2Input" type="text" class="form-control form-control-sm" /><label class="form-label subform-label">ชื่อเล่น *&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;เบอร์โทร (10 หลัก) *</label><div class="input-group"><input id="Nickname2Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone2Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label">เพื่อนคนที่ 3</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname3Input" type="text" class="form-control form-control-sm" /><label class="form-label subform-label">ชื่อเล่น *&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;เบอร์โทร (10 หลัก) *</label><div class="input-group"><input id="Nickname3Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone3Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li></ul></div><div class="mb-2"><div class="form-check"><input class="form-check-input" type="checkbox" id="ChkFriendInfo" /><label id="ChkFriendLb" class="form-check-label form-label" for="ChkFriendInfo">ข้าพเจ้ารับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น<br />ให้เปิดเผยข้อมูลส่วนบุคคลในฐานะ “แขกคนพิเศษ”<br />เพื่อเข้าร่วมกิจกรรมของ ZEA Tuna Essence แล้ว</label></div></div></form><button type="button" id="SaveReferralForm" class="btn form-control btn-registration" disabled>บันทึกข้อมูล</button>';

const form_body_html =
  '<div class="form-title">กรุณากรอกรายชื่อเพื่อนที่ต้องการแนะนำ</div><div class="form-subtitle">กรุณากรอกข้อมูลในช่องที่มี * ทุกช่อง</div><form id="CampaignReferral" class="form-body needs-validation" novalidate><div class="mb-2"><label class="form-label subform-label form-label-new-line">ผู้แนะนำ</label><label class="form-label">ชื่อ - นามสกุล *</label><div class="input-group"><input id="FirstnameInput" type="text" class="form-control form-control-sm" /><input id="SurnameInput" type="text" class="form-control form-control-sm" /></div></div><div class="mb-2"><label class="form-label">ชื่อเล่น *</label><input id="NicknameInput" type="text" class="form-control form-control-sm" /></div><div class="mb-2"><ul><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 1</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname1Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname1Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone1Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 2</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname2Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname2Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone2Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 3</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname3Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname3Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone3Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li></ul></div><div class="mb-2"><div class="form-check"><input class="form-check-input" type="checkbox" id="ChkFriendInfo" /><label id="ChkFriendLb" class="form-check-label form-label" for="ChkFriendInfo">ข้าพเจ้ารับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น<br />ให้เปิดเผยข้อมูลส่วนบุคคลในฐานะ “แขกคนพิเศษ”<br />เพื่อเข้าร่วมกิจกรรมของ ZEA Tuna Essence แล้ว</label></div></div></form><button type="button" id="SaveReferralForm" class="btn form-control btn-registration" disabled>บันทึกข้อมูล</button>';

const ios_form_body_html =
  '<div class="form-title-ios">กรุณากรอกรายชื่อเพื่อนที่ต้องการแนะนำ</div><div class="form-subtitle">กรุณากรอกข้อมูลในช่องที่มี * ทุกช่อง</div><form id="CampaignReferral" class="form-body needs-validation" novalidate><div class="mb-2"><label class="form-label subform-label form-label-new-line">ผู้แนะนำ</label><label class="form-label">ชื่อ - นามสกุล *</label><div class="input-group"><input id="FirstnameInput" type="text" class="form-control form-control-sm" /><input id="SurnameInput" type="text" class="form-control form-control-sm" /></div></div><div class="mb-2"><label class="form-label">ชื่อเล่น *</label><input id="NicknameInput" type="text" class="form-control form-control-sm" /></div><div class="mb-2"><ul><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 1</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname1Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname1Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone1Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 2</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname2Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname2Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone2Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li><li><label class="form-label subform-label form-label-new-line">เพื่อนคนที่ 3</label><label class="form-label">ชื่อ - นามสกุล</label><input id="Fullname3Input" type="text" class="form-control form-control-sm" /><div class="d-flex justify-content-between"><label class="form-label subform-label">ชื่อเล่น *</label><label class="form-label subform-label">เบอร์โทร (10 หลัก) *</label></div><div class="input-group"><input id="Nickname3Input" type="text" class="form-control form-control-sm friend-nickname-input" /><input id="Phone3Input" type="tel" class="form-control form-control-sm" maxlength=10 /></div></li></ul></div><div class="mb-2"><div class="form-check"><input class="form-check-input" type="checkbox" id="ChkFriendInfo" /><label id="ChkFriendLb" class="form-check-label form-label" for="ChkFriendInfo">ข้าพเจ้ารับรองว่าได้รับอนุญาตจากบุคคลที่มีรายชื่อข้างต้น<br />ให้เปิดเผยข้อมูลส่วนบุคคลในฐานะ “แขกคนพิเศษ”<br />เพื่อเข้าร่วมกิจกรรมของ ZEA Tuna Essence แล้ว</label></div></div></form><button type="button" id="SaveReferralForm" class="btn form-control btn-registration" disabled>บันทึกข้อมูล</button>';
// &emsp; &ensp; &nbsp;

async function main() {
  await liff.init({
    liffId: app_config.LineConf.LiffId,
    withLoginOnExternalBrowser: true,
  });
  getUserProfile();
  // if (liff.isLoggedIn()) {
  //   if (liff.isInClient()) {
  //     getUserProfile();
  //   } else {
  //     const div_content = document.getElementById('content-body');
  //     div_content.innerHTML =
  //       '<h1 class="AlreadyRegister"><br /><br /><br /><br /><br />' +
  //       '<br /><br /><br /><br />กรุณาเปิด Link ด้วย Line Application</h1>';
  //   }
  // } else {
  //   liff.login({ redirectUri: app_config.LineConf.RedirectUri });
  // }
}
main();

async function getUserProfile() {
  const user_profile = await liff.getProfile();
  // user_profile.pictureUrl;
  // user_profile.displayName;
  // user_profile.statusMessage;

  foundRegistration('T' + user_profile.userId);
  // foundRegistration('mockuserid12'); // change before test
}

function enableSaveBtn() {
  const chk_friend = document.getElementById('ChkFriendInfo');
  if (chk_friend.checked) {
    document.getElementById('SaveReferralForm').disabled = false;
  } else {
    document.getElementById('SaveReferralForm').disabled = true;
  }
}

function foundRegistration(cid) {
  let req_url = app_config.Service.BaseURL + '/customer/get/' + cid;
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const resp = JSON.parse(xhr.response);
      foundReferral(resp);
    } else {
      document.getElementById('content-body').innerHTML =
        '<h1 class="AlreadyRegister"><br /><br /><br /><br /><br /><br /><br />' +
        'คุณยังไม่ได้ลงทะเบียนกับเรา<br />กรุณาพิมพ์ "<b>กิจกรรม</b>"<br />เพื่อลงทะเบียนเข้าร่วมกิจกรรม</h1>';
    }
  };
  xhr.open('GET', req_url, true);
  xhr.send();
}

function foundReferral(json_data) {
  let req_url =
    app_config.Service.BaseURL + '/referal/get/' + json_data.line_id;
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById('content-body').innerHTML =
        '<h1 class="AlreadyRegister">' +
        '<img class="thank-you-image" src="https://raw.githubusercontent.com/illusionjew/stackblitz-liff-template/main/assets/images/Check-Icon.png" />' +
        '<br /><br />คุณได้ลงทะเบียนเข้าร่วมกิจกรรม<br />เป็นที่เรียบร้อยแล้ว</h1>';
    } else {
      initialForm(json_data);
    }
  };
  xhr.open('GET', req_url, true);
  xhr.send();
}

function initialForm(json_data) {
  const div_content = document.getElementById('content-body');
  if (liff.getOS() == 'ios') {
    div_content.innerHTML = ios_form_body_html;
  } else {
    div_content.innerHTML = form_body_html;
  }

  // default value
  document.getElementById('FirstnameInput').value = json_data.first_name;
  document.getElementById('SurnameInput').value = json_data.last_name;
  document.getElementById('NicknameInput').value =
    json_data.nick_name != null ? json_data.nick_name : '';

  // add listener function
  document.getElementById('ChkFriendInfo').onclick = () => {
    enableSaveBtn();
  };
  document.getElementById('SaveReferralForm').onclick = () => {
    submitForm(json_data.line_id);
  };
}

function submitForm(cid) {
  let req_url = app_config.Service.BaseURL + '/referal/save';
  let firstname_val = document.getElementById('FirstnameInput').value;
  let surname_val = document.getElementById('SurnameInput').value;
  let nickname_val = document.getElementById('NicknameInput').value;
  let fullname1_val = document.getElementById('Fullname1Input').value;
  let nickname1_val = document.getElementById('Nickname1Input').value;
  let phone1_val = document.getElementById('Phone1Input').value;
  let fullname2_val = document.getElementById('Fullname2Input').value;
  let nickname2_val = document.getElementById('Nickname2Input').value;
  let phone2_val = document.getElementById('Phone2Input').value;
  let fullname3_val = document.getElementById('Fullname3Input').value;
  let nickname3_val = document.getElementById('Nickname3Input').value;
  let phone3_val = document.getElementById('Phone3Input').value;
  if (
    firstname_val != '' &&
    surname_val != '' &&
    nickname_val != '' &&
    // fullname1_val != '' &&
    nickname1_val != '' &&
    phone1_val != '' &&
    // fullname2_val != '' &&
    nickname2_val != '' &&
    phone2_val != '' &&
    // fullname3_val != '' &&
    nickname3_val != '' &&
    phone3_val != ''
  ) {
    if (
      phone1_val.length != 10 ||
      phone2_val.length != 10 ||
      phone3_val.length != 10
    ) {
      alert(
        'คุณให้หมายเลขเบอร์โทรไม่ครบ 10 หลัก กรุณากรอกข้อมูลใหม่ให้ถูกต้อง'
      );
    } else {
      if (
        phone1_val == phone2_val ||
        phone1_val == phone3_val ||
        phone2_val == phone3_val
      ) {
        alert('คุณให้หมายเลขเบอร์โทรซ้ำ กรุณากรอกข้อมูลใหม่ให้ถูกต้อง');
      } else {
        let json_data = {
          line_id: cid,
          first_name: firstname_val,
          last_name: surname_val,
          nick_name: nickname_val,
          refer_list: [
            {
              index: 1,
              name: fullname1_val,
              nick_name: nickname1_val,
              phone_number: phone1_val,
            },
            {
              index: 2,
              name: fullname2_val,
              nick_name: nickname2_val,
              phone_number: phone2_val,
            },
            {
              index: 3,
              name: fullname3_val,
              nick_name: nickname3_val,
              phone_number: phone3_val,
            },
          ],
        };

        $.ajax({
          type: 'POST',
          url: req_url,
          dataType: 'json',
          // data: JSON.stringify(json_data),
          data: json_data,
          success: function (response) {
            document.getElementById('content-body').innerHTML =
              '<h1 class="AlreadyRegister">' +
              '<img class="thank-you-image" src="https://raw.githubusercontent.com/illusionjew/stackblitz-liff-template/main/assets/images/Check-Icon.png" />' +
              '<br /><br />ขอบคุณที่ลงทะเบียนเข้าร่วมกิจกรรม<br />ZEA Tuna Essence</h1>';
            setTimeout(() => {
              liff.closeWindow();
            }, 3000);
          },
          error: function (err) {
            console.log(err);
          },
        });
      }
    }
  } else {
    alert('กรุณากรอกข้อมูลในช่องที่มีเครื่องหมาย * ให้ครบถ้วน');
  }
}
