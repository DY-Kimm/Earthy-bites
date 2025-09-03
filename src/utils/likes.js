const key = (uid) => `likes:${String(uid)}`;

export function getLikedIds(uid) {
  if (!uid) return [];
  try {
    const raw = JSON.parse(localStorage.getItem(key(uid)) || "[]");
    return [...new Set(raw.map((v) => String(v)))];
  } catch {
    return [];
  }
}

export function setLiked(uid, id, liked) {
  const sid = String(id);
  if (!uid || !sid) return;
  const set = new Set(getLikedIds(uid));
  liked ? set.add(sid) : set.delete(sid);
  localStorage.setItem(key(uid), JSON.stringify([...set]));
}

export function isLiked(uid, id) {
  return getLikedIds(uid).includes(String(id));
}

export function toggleLiked(uid, id) {
  const next = !isLiked(uid, id);
  setLiked(uid, id, next);
  return next;
}

// 과거 'dish-' 프리픽스 제거
export function normalizeLikesForUser(uid) {
  if (!uid) return;
  const fixed = [
    ...new Set(getLikedIds(uid).map((s) => String(s).replace(/^dish-/, ""))),
  ];
  localStorage.setItem(key(uid), JSON.stringify(fixed));
}
