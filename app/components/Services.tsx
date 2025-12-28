export default function Services() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl font-semibold mb-4">
        ML Debugging & Fine-Tuning — On Demand
      </h2>

      <p className="text-gray-400 mb-10">
        Fast, practical help to unblock stuck ML / LLM systems and ship working models.
        No long contracts. No theory dumps.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-gray-300">
        <div className="border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-2">
             ML / LLM Pipeline Debugging
          </h3>
          <p className="mb-3 text-gray-400">
            CUDA errors, OOMs, DataLoader crashes, tokenizer mismatches,
            training that just won’t run.
          </p>
          <p className="font-semibold text-white">
            From $25 / session
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-2">
             LLM Fine-Tuning (LoRA / PEFT)
          </h3>
          <p className="mb-3 text-gray-400">
            Domain fine-tuning, parameter-efficient setups, evaluation,
            and performance stabilization.
          </p>
          <p className="font-semibold text-white">
            From $40 / setup
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-2">
             Training Stability & Optimization
          </h3>
          <p className="mb-3 text-gray-400">
            Loss not converging, exploding gradients, bad schedulers,
            mixed-precision issues.
          </p>
          <p className="font-semibold text-white">
            From $30 / fix
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-2">
             AWS ML Setup & Experiments
          </h3>
          <p className="mb-3 text-gray-400">
            GPU instances, cost-aware experimentation,
            reproducible training environments.
          </p>
          <p className="font-semibold text-white">
            From $20
          </p>
        </div>
      </div>

      <p className="text-gray-400 mt-10">
        💬 Not sure what’s broken?  
        Describe the issue — I’ll tell you , how we can fix it.
      </p>
    </section>
  );
}
