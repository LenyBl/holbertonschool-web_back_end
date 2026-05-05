export default function createInt8TypedArray(arr) {
	if (!Array.isArray(arr)) {
		return new Int8Array();
	}
	return new Int8Array(arr);
}
