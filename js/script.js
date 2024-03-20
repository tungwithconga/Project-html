function access() {
  let ifr = document.getElementById('iframe_id');
  let ifr_doc = ifr.contentWindow.document;
  let check_click_add = ifr_doc.getElementsByClassName('them');
  let check_click_link = ifr_doc.getElementsByTagName('a');
  for (let i = 0; i < check_click_add.length; i++) {
    check_click_add[i].onclick = function() {
      mo_tbdn(this);
    }
  }
  for (let i = 0; i < check_click_link.length; i++) {
    check_click_link[i].onclick = function() {
      mo_tbdn(this);
    }
  }
  let so_trang = ifr_doc.getElementsByClassName('so_trang');
  for (let i = 0; i < so_trang.length - 1; i++) {
    so_trang[i].onclick = function(){
      scroll_to_top();
    }
  }
};
function scroll_to_top(){
  window.location = 'index.html#this_top_of_iframe';
}
function mo_tbdn(item) {
  let quaylai = document.getElementById('no');
  let dangnhap = document.getElementById('yes');
  let tbdn = document.getElementById('thong-bao-dang-nhap');
  let url = item.getAttribute('href');
  let get_class = item.getAttribute('class');
  let so_trang = item.getAttribute('class','so_trang');
  if (url != '#' && url != null && url != '' && get_class != 'so_trang') {
    window.location = url;
  }
  if (get_class == 'them') {
    tbdn.style.display = 'block';
    quaylai.onclick = function() {
      tbdn.style.display = 'none';
    }
    dangnhap.onclick = function() {
      window.location = 'dang-nhap.html';
    }
  }
};


function change_iframe(item) {
  window.top[0].location = item.value;
  console.log(item.value);
};
function back_to_home(item){
  let new_window = window.open('index.html');
  new_window.onload = function(){
    let a = new_window.document.getElementById('iframe_id');
    a.setAttribute('src', item.value);
    this.location += '#this_top_of_iframe';
  };
};
