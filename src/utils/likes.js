const key = (uid) => `likes:${uid}`;

// 저장 포맷: [{id, name, image, country, tags}]  // 과거 버전의 [id]도 자동 호환
export function getLikedItems(uid) {
  if (!uid) return [];
  try {
    const raw = JSON.parse(localStorage.getItem(key(uid)) || "[]");
    // 과거: [id] 였던 경우 -> 호환 (빈 객체로 변환)
    if (Array.isArray(raw) && raw.every(v => typeof v !== 'object')) {
      return raw.map(id => ({ id }));
    }
    return raw;
  } catch {
    return [];
  }
}

export function isLiked(uid, id) {
  if (!uid || !id) return false;
  return getLikedItems(uid).some(it => it.id === id);
}

export function setLiked(uid, item, liked) {
  if (!uid || !item?.id) return;
  const arr = getLikedItems(uid);
  const i = arr.findIndex(it => it.id === item.id);
  if (liked) {
    if (i === -1) arr.push(item);
  } else {
    if (i !== -1) arr.splice(i, 1);
  }
  localStorage.setItem(key(uid), JSON.stringify(arr));
}

export function toggleLiked(uid, item) {
  const liked = isLiked(uid, item.id);
  setLiked(uid, item, !liked);
  return !liked;
}
