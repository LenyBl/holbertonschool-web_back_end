export default function guardrail(mathFunction, ...args) {
  try {
	return mathFunction(...args);
  } catch (error) {
	return String(error);
  }
}
